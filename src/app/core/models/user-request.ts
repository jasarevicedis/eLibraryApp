import { Role } from "./Role";

export interface UserRequest {
    id?: number;
    username?:string;
    firstname?:string;
    lastname?:string;
    email?: string;
    password?: string;
    roleID?: number;
    role?: Role;
}