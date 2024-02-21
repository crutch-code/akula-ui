import {jwtDecode} from 'jwt-decode';
import {NewsType} from '../types/NewsType'
import {UserType} from "../types/UserType";
import {CourseType} from "../types/CourseType";
import {LessonType} from "../types/LessonType";
import {TestType} from "../types/TestType";
import {QuestionType} from "../types/QuestionType";
import {Jwt} from "../types/Jwt";

export class REST {
    public static BASE: String = process.env.REACT_APP_BASE ?? "";

    protected static get(url: string): any {//FIXME: remove
        fetch(REST.BASE + url, {method: "GET"})
            .then((response) => response.json())
            .then((data: any) => {
                return data;
            })
            .catch((error) => console.error(error));
    }

    public static login(username: string, password: string): Promise<Jwt> {
        return fetch(this.BASE + "/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, password: password})
        })
            .then((response) => {
                if (response.status === 401)
                    throw new Error('401');
                return response.json();
            })
            .then((token) => {
                const jwt = jwtDecode<Jwt>(token?.access_token);
                sessionStorage.setItem("me", JSON.stringify(jwt.user));
                sessionStorage.setItem("jwt", token?.access_token);
                //localStorage.setItem('token', token);
                return jwt;
            });
    }

    public static logout(): void {
        fetch(this.BASE + "/api/logout", {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .catch((error) => {
                console.error(error);
                return [];
            })
            .finally(() => {
                sessionStorage.removeItem("me");
                sessionStorage.removeItem("jwt");
                //window.location.href = '/';
            });
    }

    public static getNews(): Promise<NewsType[]> {
        return fetch(REST.BASE + "/api/news", {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                return data.body.content;
            })
            .then((data: NewsType[]) => {
                return data;
            });
        //.catch((error) => console.warn(error));
    }

    public static getNewsById(id: any): Promise<NewsType> {
        return fetch(REST.BASE + "/api/news/" + id, {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getMe(): Promise<UserType> {
        return fetch(REST.BASE + "/api/user/me", {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getUserById(id: any): Promise<UserType> {
        return fetch(REST.BASE + "/api/user/" + id, {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getAsssignedCourses(): Promise<CourseType[]> {
        return fetch(REST.BASE + "/api/course", {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body.content;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getCourseById(id: any): Promise<CourseType> {
        return fetch(REST.BASE + "/api/course/" + id, {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getLessonById(id: any): Promise<LessonType> {
        return fetch(REST.BASE + "/api/lesson/" + id, {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getTestById(id: any): Promise<TestType> {
        return fetch(REST.BASE + "/api/test/" + id, {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static startTest(id: any): Promise<QuestionType> {
        return fetch(REST.BASE + "/api/test/" + id + "/start", {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static nextQuestion(answer: QuestionType): Promise<QuestionType> {
        return fetch(REST.BASE + "/api/test/next/", {
            method: "PUT",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(answer)
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static getCourses(): Promise<CourseType[]> {
        return fetch(REST.BASE + "/api/course/", {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }

    public static adminGetUsers(): Promise<UserType[]> {
        return fetch(REST.BASE + "/api/admin/users/", {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")}
        })
            .then((response) => {
                if (response.status === 401) {
                    sessionStorage.removeItem("me");
                    sessionStorage.removeItem("jwt");
                    window.location.href = '/';
                }
                return response.json();
            })
            .then((data: any) => {
                if (data.status === 'OK')
                    return data.body;
                throw data;
            })
            .catch((error) => console.error(error));
    }
}