'use client'

import styles from "./page.module.scss";
import BarberInput from "@/ components/Barber/BarberInput";
import { useState } from "react";
export default function Home() {

  const[seviceType] = useState([
    {id: 1, service: "Barbeiro"},
    {id: 2, service: "Cabelereiro"},
    {id: 3, service: "Auxiliar"},
])

  return (
    <div className={styles.container}>
      <BarberInput type="text" label="Nome Completo"/>
      <BarberInput type="date" label="Data"/>
      <h1>Endereço</h1>
      <BarberInput type="text" label="CEP" size="large"/>
      <BarberInput type="text" label="Número" size="large"/>
      <BarberInput type="text" label="Rua" size="large"/>

      <h1>Informações</h1>
      <BarberInput type="text" label="Tipo de serviço" size="small"/>
      <BarberInput type="text" label="Horarios de trabalho" size="small"/>
    </div>
  );
}
