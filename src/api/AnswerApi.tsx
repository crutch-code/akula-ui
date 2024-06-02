import {REST} from "./REST";

export class AnswerApi{

    public static adminRemoveAnswer(id:bigint): Promise<any> {
        return fetch(REST.BASE + "/api/admin/question/answer/" + id, {
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
}