import api from "@/api/http-common";

export async function postServico(servicoData: any) {
    return await api.post("/services", servicoData);
}