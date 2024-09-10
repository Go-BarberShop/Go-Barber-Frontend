"use client";

import 'react-day-picker/dist/style.css';
import styles from "./dashboard.module.scss";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { FiClock } from 'react-icons/fi';
import { getBarberPhotoById } from '@/api/barbeiro/getBarberPhotoById';
import { getAllAppointments } from '@/api/agendamento/getAllAppointments';
import Link from 'next/link';

interface Appointment {
  clientName: string;
  clientNumber: string;
  startTime: string;
  endTime: string;
  barber: {
    idBarber: number;
    name: string;
  };
  serviceType: {
    idService: number;
    nameService: string;
    descriptionService: string;
    valueService: number;
    timeService: string;
  }[];
  barberPhoto?: string;
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const fetchBarberPhoto = async (barberId: number): Promise<string | undefined> => {
    try {
      const response = await getBarberPhotoById(barberId.toString());
      if (response.data) {
        const imageBlob = new Blob([response.data], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(imageBlob);
        return imageUrl;
      } else {
        console.error("Nenhum dado encontrado na resposta.");
        return undefined;
      }
    } catch (error) {
      console.error("Erro ao buscar a imagem do barbeiro:", error);
      return undefined;
    }
  };

  const loadBarberPhotos = async (appointments: Appointment[]): Promise<Appointment[]> => {

    const updatedAppointments = await Promise.all(
      appointments.map(async (appointment) => {
        const barberPhoto = await fetchBarberPhoto(appointment.barber.idBarber);
        return {
          ...appointment,
          barberPhoto,
        };
      })
    );

    return updatedAppointments;
  };

  useEffect(() => {
    const loadAppointments = async () => {
        try {
            const response = await getAllAppointments(0, 100);
            const data = response.data.content as Appointment[]; // Certifique-se de que `content` é um array
            if (!Array.isArray(data)) {
                throw new Error("A resposta não é um array.");
            }
            const appointmentsWithPhotos = await loadBarberPhotos(data);
            setAppointments(appointmentsWithPhotos);
        } catch (error) {
            console.error("Erro ao carregar agendamentos:", error);
        }
    };

    loadAppointments();
}, []);


  const parseDateTime = (dateTimeString: string): Date => {
    return parse(dateTimeString, "dd/MM/yyyy HH:mm", new Date());
  };

  const morningAppointments = appointments.filter((appointment) => {
    const hour = parseDateTime(appointment.startTime).getHours();
    return hour < 12;
  });

  const afternoonAppointments = appointments.filter((appointment) => {
    const hour = parseDateTime(appointment.startTime).getHours();
    return hour >= 12;
  });

  const handleDateChange = (day: Date | undefined) => {
    if (day) {
      setSelectedDate(day);
    }
  };

  const formatTime = (dateTimeString: string): string => {
    const date = parseDateTime(dateTimeString);
    return format(date, "HH:mm");
  };

  return (
    <div id="dashboard" className={styles.container}>
      <div className={styles.container__ContainerForm}>
        <div className={styles.container__header}>
          <div className={styles.container__header_title}>
            <div>
              <h1>Horários agendados</h1>
              <p>
                <span>{format(selectedDate, "'Hoje |' dd 'de' MMMM |", { locale: ptBR })}</span>
                <span>{format(selectedDate, " ccc", { locale: ptBR })}</span>
              </p>
              <Link href="/agendamentos/cadastrar-agendamento">
                <button className={styles.registerButton}>
                  Cadastrar Agendamento
                </button>
              </Link>
            </div>
            
          </div>
        </div>

        <div className={styles.container__appointments}>
          {morningAppointments.length > 0 && (
            <div className={styles.timeSlot}>
              <strong className={styles.timeSlotTitle}>Manhã</strong>
              {morningAppointments.map((appointment) => (
                <div key={appointment.startTime} className={styles.appointment}>
                  <span>
                    <FiClock />
                    {formatTime(appointment.startTime)}
                  </span>
                  <div className={styles.userInfo}>
                    {appointment.barberPhoto && (
                      <img
                        src={appointment.barberPhoto}
                        alt={appointment.barber.name}
                        className={styles.userAvatar}
                      />
                    )}
                   
                    <h1 className={styles.userName} style={{ fontWeight: 600 }}>
                      {appointment.barber.name}
                      <span className={styles.clientName} style={{ color: 'orange', fontWeight: 500 }}>
                      {appointment.clientName}  - 
                        {appointment.clientNumber}
                      </span>
                      
                    </h1>
                    

                  </div>
                </div>
              ))}
            </div>
          )}

          {afternoonAppointments.length > 0 && (
            <div className={styles.timeSlot}>
              <strong className={styles.timeSlotTitle}>Tarde</strong>
              {afternoonAppointments.map((appointment) => (
                <div key={appointment.clientNumber + appointment.startTime} className={styles.appointment}>
                  <span>
                    <FiClock />
                    {formatTime(appointment.startTime)}
                  </span>
                  <div className={styles.userInfo}>
                    {appointment.barberPhoto && (
                      <img
                        src={appointment.barberPhoto}
                        alt={appointment.barber.name}
                        className={styles.userAvatar}
                      />
                    )}
                    <h1 className={styles.userName} style={{ fontWeight: 600 }}>
                      {appointment.barber.name}
                      <span className={styles.clientName} style={{ color: 'orange', fontWeight: 500 }}>
                      {appointment.clientName}  - 
                        {appointment.clientNumber}
                      </span>
                      
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.container__calendar}>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
          locale={ptBR}
          classNames={{
            root: styles['rdp-root'],
            nav: styles['rdp-nav'],
            button_previous: styles['rdp-button_previous'],
            button_next: styles['rdp-button_next'],
            caption_label: styles['rdp-caption_label'],
            month: styles['rdp-months'],
            weekday: styles['rdp-weekday'],
            day: styles['rdp-day'],
            day_today: styles['rdp-today'],
            day_selected: styles['rdp-selected'],
            day_disabled: styles['rdp-disabled'],
            day_outside: styles['rdp-outside'],
            week: styles['rdp-week'],
            weekdays: styles['rdp-weekdays'],
            month_grid: styles['rdp-month_grid'],
            range_start: styles['rdp-range_start'],
            range_middle: styles['rdp-range_middle'],
            range_end: styles['rdp-range_end'],
          }}
          modifiers={{
            available: (day: Date) => {
              const date = day.getDate();
              return appointments.some(
                appointment => parseDateTime(appointment.startTime).getDate() === date
              );
            },
          }}
          modifiersClassNames={{
            available: styles.availableDay,
          }}
          disabled={[
            { dayOfWeek: [0, 6] }, // Desabilitando domingos e sábados
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
