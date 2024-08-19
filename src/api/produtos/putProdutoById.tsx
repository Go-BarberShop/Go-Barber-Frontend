import api from "@/api/http-common";

export async function putProdutoById(id: number | string | string[] | undefined, newData : any) {
    return await api.put(`/product/${id}`, newData);
}