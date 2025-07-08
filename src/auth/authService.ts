import type { IUser } from "../types/userTypes";

export const performLogin = async (username: string, password: string): Promise<IUser | null> => {
    if (username === "admin" && password === "admin") {
        return Promise.resolve({
            id: '0',
            displayName: 'Admin',
            username: 'admin'
        })
    }

    return Promise.resolve(null);
}