import { ProxyStatus, ProxyType, type IProxy } from "../types/proxyTypes";

export const getProxies = async (): Promise<IProxy[]> => {
    return Promise.resolve([
        {
            id: '1',
            ip: '127.0.0.1',
            port: 8080,
            type: ProxyType.HTTP,
            country: 'US',
            status: ProxyStatus.ACTIVE,
            createdAt: new Date(),
            updatedAt: new Date(),
            categories: [
                {
                    id: '1',
                    name: 'Proxy xoay'
                },
                {
                    id: '2',
                    name: 'Proxy 5G'
                }
            ],
            vendor: {
                id: '1',
                name: 'Viettel',
            }
        },
        {
            id: '2',
            ip: '127.0.0.2',
            port: 8081,
            type: ProxyType.SOCKS,
            country: 'UK',
            status: ProxyStatus.ACTIVE,
            createdAt: new Date(),
            updatedAt: new Date(),
            categories: [
                {
                    id: '3',
                    name: 'Proxy Hộ gia đình'
                }
            ],
            vendor: {
                id: '2',
                name: 'VinaPhone',
            }
        }
    ])
}