import api from "@/api/http-common";

export async function putEstoqueById(id: number | string | string[] | undefined, newData : any) {
    return await api.put(`/stock/${id}`, newData);
}