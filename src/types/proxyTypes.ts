import type { ICategory } from "./categoryTypes";
import type { IVendor } from "./vendorTypes";

export enum ProxyType {
    HTTP = 'http',
    SOCKS = 'socks',
}

export enum ProxyStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

export interface IProxy {
    id: string;
    ip: string;
    port: number;
    type: ProxyType;
    country: string;
    status: ProxyStatus;
    createdAt: Date;
    updatedAt: Date;
    description?: string;
    categories: ICategory[];
    vendor: IVendor;
}