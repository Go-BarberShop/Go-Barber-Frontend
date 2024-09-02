"use client";

import 'react-day-picker/dist/style.css';
import styles from "./dashboard.module.scss";
import { useEffect, useState } from "react";
import { format, parseISO, isAfter, isBefore } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { FiPower, FiClock } from 'react-icons/fi';

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    date: new Date(new Date().setHours(9, 0, 0)).toISOString(),
    hourFormatted: "09:00",
    user: {
      name: "João da Silva",
      avatar_url: "https://via.placeholder.com/150",
    },
  },
  {
    id: "2",
    date: new Date(new Date().setHours(14, 0, 0)).toISOString(),
    hourFormatted: "14:00",
    user: {
      name: "Maria Oliveira",
      avatar_url: "https://via.placeholder.com/150",
    },
  },
  {
    id: "3",
    date: new Date(new Date().setHours(16, 0, 0)).toISOString(),
    hourFormatted: "16:00",
    user: {
      name: "Carlos Souza",
      avatar_url: "https://via.placeholder.com/150",
    },
  },
];

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const appointmentsFormatted = mockAppointments.map((appointment) => ({
      ...appointment,
      hourFormatted: format(parseISO(appointment.date), "HH:mm"),
    }));
    setAppointments(appointmentsFormatted);
  }, [selectedDate]);

  const nextAppointment = appointments.find((appointment) =>
    isAfter(parseISO(appointment.date), new Date())
  );

  const morningAppointments = appointments.filter((appointment) => {
    const hour = new Date(appointment.date).getHours();
    return hour < 12;
  });

  const afternoonAppointments = appointments.filter((appointment) => {
    const hour = new Date(appointment.date).getHours();
    return hour >= 12;
  });

  const handleDateChange = (day: Date | undefined) => {
    if (day) {
      setSelectedDate(day);
    }
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
            </div>
            
          </div>
        </div>

        <div className={styles.container__appointments}>
            {nextAppointment && (
                <div className={styles.timeSlot}>
                    <strong className={styles.timeSlotTitle}>Atendimento a seguir</strong>
                    <div key={nextAppointment.id} className={styles.appointment}>
                      <span>
                          <FiClock />
                          {nextAppointment.hourFormatted}
                      </span>
                      <div className={styles.userInfo}>
                        <img
                            src={nextAppointment.user.avatar_url}
                            alt={nextAppointment.user.name}
                        />
                        <p className={styles.userName}>{nextAppointment.user.name}</p>
                      </div>
                    </div>
                    
                </div>
            )}
            {morningAppointments.length > 0 && (
                <div className={styles.timeSlot}>
                <strong className={styles.timeSlotTitle}>Manhã</strong>
                {morningAppointments.map((appointment) => (
                    <div key={appointment.id} className={styles.appointment}>
                      <span>
                          <FiClock />
                          {appointment.hourFormatted}
                      </span>
                      <div className={styles.userInfo}>
                          <img
                          src={appointment.user.avatar_url}
                          alt={appointment.user.name}
                          className={styles.userAvatar}
                          />
                          <strong className={styles.userName}>{appointment.user.name}</strong>
                      </div>
                    </div>
                ))}
                </div>
            )}

            {afternoonAppointments.length > 0 && (
                <div className={styles.timeSlot}>
                <strong className={styles.timeSlotTitle}>Tarde</strong>
                {afternoonAppointments.map((appointment) => (
                    <div key={appointment.id} className={styles.appointment}>
                    <span>
                        <FiClock />
                        {appointment.hourFormatted}
                    </span>
                    <div className={styles.userInfo}>
                        <img
                        src={appointment.user.avatar_url}
                        alt={appointment.user.name}
                        className={styles.userAvatar}
                        />
                        <strong className={styles.userName}>{appointment.user.name}</strong>
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
            available: (day) => {
              const date = day.getDate();
              return mockAppointments.some(
                appointment => parseISO(appointment.date).getDate() === date
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
