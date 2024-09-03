import api from "@/api/http-common";

export async function getAllAppointments(page: number, size: number) {
    return await api.get(`/appointments?page=${page}&size=${size}`);
}
