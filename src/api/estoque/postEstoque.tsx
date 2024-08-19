import api from "@/api/http-common";

export async function postEstoque(produtoData: any) {
    return await api.post("/stock", produtoData);
}