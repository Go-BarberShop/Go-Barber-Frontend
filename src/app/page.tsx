"use client";

import styles from "./page.module.scss";
import BarberInput from "@/ components/Barber/BarberInput";
import SelectBarber from "@/ components/SelectBarber";
import { useState } from "react";
export default function Home() {
  const [serviceType] = useState([
    { id: 1, name: "Barbeiro" },
    { id: 2, name: "Cabelereiro" },
    { id: 3, name: "Auxiliar" },
  ]);

  const [workload] = useState([
    { id: 1, name: "20hrs" },
    { id: 2, name: "30hrs" },
    { id: 3, name: "40hrs" },
  ]);

  const [workSchedule] = useState([
    { id: 1, name: "08:00 - 17:00" },
    { id: 2, name: "09:00 - 18:00" },
    { id: 3, name: "08:00 - 12:00" },
    { id: 4, name: "08:00 - 15:00" },
  ]);

  return (
    <div className={styles.container}>
      <BarberInput type="text" label="Nome Completo" />
      <BarberInput type="date" label="Data" />
      <h1>Endereço</h1>
      <BarberInput type="text" label="CEP" size="large" />
      <BarberInput type="text" label="Número" size="large" />
      <BarberInput type="text" label="Rua" size="large" />

      <h1>Informações</h1>
      <SelectBarber optionArray={serviceType} label="Tipo de serviço" />
      <SelectBarber optionArray={workload} label="Carga horária semanal" />
      <SelectBarber optionArray={workSchedule} label="Horários de trabalho" />

      <div className={styles.option}></div>
    </div>
  );
}
