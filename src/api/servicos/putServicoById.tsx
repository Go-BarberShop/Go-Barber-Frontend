import api from "@/api/http-common";

export async function putServicoById(id: string | string[] | undefined, newData : any) {
    return await api.put(`/services/${id}`, newData);
}