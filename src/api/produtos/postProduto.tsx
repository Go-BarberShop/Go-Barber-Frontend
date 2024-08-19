import api from "@/api/http-common";

export async function postProduto(produtoData: any) {
    return await api.post("/product", produtoData);
}