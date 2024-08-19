import api from "@/api/http-common";

export async function putBarbeiroById(id: string | string[] | undefined, newData : any) {
    return await api.put(`/barber/${id}`, newData);
}