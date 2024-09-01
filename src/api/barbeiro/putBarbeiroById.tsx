import api from "@/api/http-common";
import { Barbeiro } from "@/interfaces/barbeiroInterface";

export async function putBarbeiroById(id: string | string[] | undefined, newData : Barbeiro) {
    return await api.put(`/barber/${id}`, newData);
}