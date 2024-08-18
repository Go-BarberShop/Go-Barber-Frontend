import api from "@/api/http-common";

export async function postPromocao(promotionData: any) {
    return await api.post("/sale", promotionData);
}