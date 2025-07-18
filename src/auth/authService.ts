import axiosInstance from "~/lib/axiosInstance";
import type { IUser } from "../types/userTypes";
import { API_PATH } from "~/common/constant/apiPath";

interface LoginResponse {
  user: IUser;
  token: string;
}

export const performLogin = async (
  username: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      API_PATH.AUTH.LOGIN,
      {
        username,
        password,
      }
    );

    console.log(response.data);

    const { token } = response.data.data;
    localStorage.setItem("accessToken", token);

    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return true;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
};

export const getMe = async (): Promise<IUser | null> => {
  try {
    const response = await axiosInstance.get<IUser>(API_PATH.AUTH.ME);
    return response.data.data;
  } catch (error) {
    console.error("Get me error:", error);
    return null;
  }
};
