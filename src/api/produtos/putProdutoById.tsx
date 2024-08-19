import api from "@/api/http-common";

export async function putProdutoById(id: string | string[] | undefined, newData : any) {
    return await api.put(`/sale/${id}`, newData);
}