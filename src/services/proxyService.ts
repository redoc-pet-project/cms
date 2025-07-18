import { API_PATH } from "~/common/constant/apiPath";
import axiosInstance from "~/lib/axiosInstance";
import { ProxyStatus, ProxyType, type IProxy } from "../types/proxyTypes";

export interface IGetProxyTye {
  page: number;
  limit: number;
  sortKey?: string;
  orderBy?: "ASC" | "DESC";
  search?: string;
}

export const getProxies = async (
  props: IGetProxyTye
): Promise<{
  data: IProxy[];
  meta: { page: number; limit: number; total: number; totalPages: number };
}> => {
  console.log(axiosInstance.defaults.headers.common["Authorization"]);
  const response = await axiosInstance.get<IProxy[]>(API_PATH.PROXY.LIST, {
    params: {
      page: props.page + 1,
      limit: props.limit,
      sortKey: props.sortKey,
      orderBy: props.orderBy,
      search: props.search,
    },
  });

  if (!response) {
    return {
      data: [],
      meta: {
        page: 1,
        limit: 10,
        total: 0,
      },
    };
  }

  const { page, limit, total } = response.data.meta;

  const totalPages = total / limit > 1 ? total / limit : 1;

  return {
    data: response.data?.data,
    meta: {
      page: page - 1,
      limit,
      total,
      totalPages,
    },
  };
};
