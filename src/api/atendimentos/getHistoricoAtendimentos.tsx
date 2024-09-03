import api from "../http-common";
export async function getHistoricoAtendimentos(page:number, size:number){
    return api.get(`/appointments/history?page=${page}&size=${size}`)
}