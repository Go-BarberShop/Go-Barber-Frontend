import api from "@/api/http-common";

export async function putPromocaoById(id: string | string[] | undefined, newData : any) {
    return await api.put(`/sale/${id}`, newData);
}