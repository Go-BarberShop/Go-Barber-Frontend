import api from "@/api/http-common";

export async function postBarber(barberData: any){
    return await api.post("/barber", barberData);
}