import api from "@/api/http-common";

export async function deleteBarber(id: number){
    return await api.delete(`/barber/${id}`);
}