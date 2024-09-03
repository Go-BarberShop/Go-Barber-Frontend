export class Agendamento {
    clientName: string;
    clientNumber: string;
    barberId: number;
    serviceTypeIds: number[];
    startTime: string;
  
    constructor(
      clientName: string = '',
      clientNumber: string = '',
      barberId: number = 0,
      serviceTypeIds: number[] = [],
      startTime: string = ''
    ) {
      this.clientName = clientName;
      this.clientNumber = clientNumber;
      this.barberId = barberId;
      this.serviceTypeIds = serviceTypeIds;
      this.startTime = startTime;
    }
  }
  