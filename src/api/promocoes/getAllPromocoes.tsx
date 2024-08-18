import api from "@/api/http-common";

export async function getAllPromocoes() {
    return await api.get("/sale");
}