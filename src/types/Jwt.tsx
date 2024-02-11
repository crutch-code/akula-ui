import {JwtPayload} from "jwt-decode";
import {UserType} from "./UserType";

export interface Jwt extends JwtPayload {
    iss: string;
    sub: string;
    exp: number;
    iat: number;
    roles: [];
    user: UserType
}