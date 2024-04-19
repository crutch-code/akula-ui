import {jwtDecode} from 'jwt-decode';
import {NewsType} from '../types/NewsType'
import {UserType} from "../types/UserType";
import {CourseType} from "../types/CourseType";
import {LessonType} from "../types/LessonType";
import {TestType} from "../types/TestType";
import {QuestionType} from "../types/QuestionType";
import {Jwt} from "../types/Jwt";
import {StorageType} from "../types/StorageType";
import {RoleType} from "../types/RoleType";
import {TestResultType} from "../types/TestResultType";

export class REST {
    public static BASE: String = process.env.REACT_APP_BASE ?? "";
    public static AKULA: string = "https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1";
    public static PAGE_SIZE: number = parseInt(process.env.REACT_PAGE_SIZE ?? "10");
    public static MCE_API: string = "ogrpozowmgba715r5s18gjjia35w1j89rcbf9r6xod87a2na";

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

    public static resultTest(id: any): Promise<TestResultType[]> {
        return fetch(REST.BASE + "/api/test/" + id + "/result", {
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
            body: JSON.stringify(answer, (_, v) => typeof v === 'bigint' ? v.toString() : v)
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

    public static adminSyncUsers(): Promise<number> {
        return fetch(REST.BASE + "/api/admin/user/sync", {
            method: "PUT",
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

    public static adminGetUsers(page: number): Promise<UserType[]> {
        return fetch(REST.BASE + "/api/admin/user/" + (page === 0 ? "" : "?page=" + page), {
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

    public static adminGetUserById(id: number): Promise<UserType> {
        return fetch(REST.BASE + "/api/admin/user/" + id, {
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

    public static adminGetNews(page: number): Promise<NewsType[]> {
        return fetch(REST.BASE + "/api/admin/news/" + (page === 0 ? "" : "?page=" + page), {
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

    public static adminGetCourses(page: number): Promise<CourseType[]> {
        return fetch(REST.BASE + "/api/admin/course/" + (page === 0 ? "" : "?page=" + page), {
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

    public static adminGetCourseById(id: number): Promise<CourseType> {
        return fetch(REST.BASE + "/api/admin/course/" + id, {
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

    public static adminGetCourseEnable(id: number): void {
        fetch(REST.BASE + "/api/admin/course/" + id + "/enable", {
            method: "PUT",
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

    public static adminGetCourseDisable(id: number): void {
        fetch(REST.BASE + "/api/admin/course/" + id + "/disable", {
            method: "PUT",
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

    public static adminNewCourse(course: any): Promise<CourseType> {
        return fetch(REST.BASE + "/api/admin/course/", {
            method: "POST",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(course)
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

    public static adminNewLesson(lesson: any, cid: number): Promise<LessonType> {
        return fetch(REST.BASE + "/api/admin/lesson/" + cid, {
            method: "POST",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(lesson)
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

    public static adminGetLessons(cid: number, page: number): Promise<LessonType[]> {
        return fetch(REST.BASE + "/api/admin/course/" + cid + "/lesson/" + (page === 0 ? "" : "?page=" + page), {
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

    public static adminGetLessonById(id: number): Promise<LessonType> {
        return fetch(REST.BASE + "/api/admin/lesson/" + id, {
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

    public static adminGetLessonEnable(id: number): void {
        fetch(REST.BASE + "/api/admin/lesson/" + id + "/enable", {
            method: "PUT",
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

    public static adminGetLessonDisable(id: number): void {
        fetch(REST.BASE + "/api/admin/lesson/" + id + "/disable", {
            method: "PUT",
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

    public static adminUpdateLesson(l: any): Promise<LessonType> {
        return fetch(REST.BASE + "/api/admin/lesson/", {
            method: "PUT",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(l)
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

    public static adminGetNewsById(id: number): Promise<NewsType> {
        return fetch(REST.BASE + "/api/admin/news/" + id, {
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

    public static adminGetNewsEnable(id: number): void {
        fetch(REST.BASE + "/api/admin/news/" + id + "/enable", {
            method: "PUT",
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

    public static adminGetNewsDisable(id: number): void {
        fetch(REST.BASE + "/api/admin/news/" + id + "/disable", {
            method: "PUT",
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

    public static adminGetTests(lid: number, page: number): Promise<TestType[]> {
        return fetch(REST.BASE + "/api/admin/lesson/" + lid + "/tests" + (page === 0 ? "" : "?page=" + page), {
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

    public static uploadFile(form: FormData): Promise<StorageType> {
        return fetch(REST.BASE + "/api/storage/", {
            method: "POST",
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: form
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

    public static adminUpdateNews(n: any): Promise<NewsType> {
        return fetch(REST.BASE + "/api/admin/news/", {
            method: "PUT",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(n)
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

    public static adminCreateNews(n: any): Promise<NewsType> {
        return fetch(REST.BASE + "/api/admin/news/", {
            method: "POST",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(n, (_, v) => typeof v === 'bigint' ? v.toString() : v)
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

    public static adminAddRole(rid: number, uid: number): Promise<any> {
        return fetch(REST.BASE + "/api/admin/roles/" + rid + "?uid=" + uid, {
            method: "PUT",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
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

    public static adminRemoveRole(rid: number, uid: number): Promise<any> {
        return fetch(REST.BASE + "/api/admin/roles/" + rid + "?uid=" + uid, {
            method: "DELETE",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
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

    public static adminUpdateCourse(n: any): Promise<CourseType> {
        return fetch(REST.BASE + "/api/admin/course/", {
            method: "PUT",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(n)
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

    public static adminGetAssignedRoles(uid: number): Promise<RoleType[]> {
        return fetch(REST.BASE + "/api/admin/roles/assigned/" + uid, {
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

    public static adminGetAssignedCourses(uid: number): Promise<CourseType[]> {
        return fetch(REST.BASE + "/api/admin/course/assigned/" + uid, {
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

    public static adminUpdateTest(t: any): Promise<TestType> {
        return fetch(REST.BASE + "/api/admin/test/", {
            method: "PUT",
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")},
            body: JSON.stringify(t, (_, v) => typeof v === 'bigint' ? v.toString() : v)
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