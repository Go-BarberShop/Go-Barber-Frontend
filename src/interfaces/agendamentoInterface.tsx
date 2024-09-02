import { Barbeiro } from "./barbeiroInterface";
import { Servico } from "./servicoInterface";

interface TimeService {
    hour: number;
    minute: number;
    second: number;
    nano: number;
}

interface ServiceType {
    idService: number;
    nameService: string;
    descriptionService: string;
    valueService: number;
    timeService: TimeService;
}

export interface Agendamento {
    clientName: string;
    clientNumber: string;
    barber: Barbeiro;
    services: ServiceType[];
    startTime: string;
    endTime: string; 
}
