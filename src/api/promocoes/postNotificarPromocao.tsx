import api from "@/api/http-common";

export async function postNotificarPromocao() {
    return await api.post("/sale/email/notify");
}