import api from "@/api/http-common";

export async function getAllBarbers(){
    return await api.get("/barber");
}