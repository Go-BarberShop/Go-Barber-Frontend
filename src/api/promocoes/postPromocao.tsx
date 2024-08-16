import api from "@/api/http-common";

export async function postPromocao() {
    return await api.post("/sale");
}