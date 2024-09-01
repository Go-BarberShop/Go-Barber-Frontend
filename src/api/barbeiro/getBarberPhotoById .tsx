import api from "@/api/http-common";

export async function getBarberPhotoById (id: string){
    return await api.get(`/barber/${id}/profile-photo`);
}