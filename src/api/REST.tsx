import {NewsType} from '../types/NewsType'
import {UserType} from "../types/UserType";

export class REST {
    public static BASE: string = "";
    //public static BASE: string = "http://localhost:8080";//"https://akula.gcg.name";

    protected static get(url: string): any {
        fetch(REST.BASE + url, {method: "GET"})
            .then((response) => response.json())
            .then((data: any) => {
                return data;
            })
            .catch((error) => console.error(error));
    }

    public static getNews(): Promise<NewsType[]> {
        return fetch(REST.BASE + "/api/news", {method: "GET"})
            .then((response) => response.json())
            .then((data: any) => { return data.body.content; })
            .then((data: NewsType[]) => { return data; });
            //.catch((error) => console.warn(error));
    }

    public static getNewsById(id: any): Promise<NewsType> {
        return fetch(REST.BASE + "/api/news/" + id, {method: "GET"})
            .then((response) => response.json())
            .then((data: any) => {
                if(data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getMe(): Promise<UserType> {
        return fetch(REST.BASE + "/api/user/me", {method: "GET"})
            .then((response) => response.json())
            .then((data: any) => {
                if(data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getUserById(id: any): Promise<UserType> {
        return fetch(REST.BASE + "/api/user/" + id, {method: "GET"})
            .then((response) => response.json())
            .then((data: any) => {
                if(data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

}