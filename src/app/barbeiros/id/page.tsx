"use client"
import React from "react";
import Menu from "@/components/Menu";
import BarberInfo from "@/components/Barber/BarberInfo/BarberInfo";
import styles from "./editar-barbeiro.module.scss"

const page = () => {

    const testValues = {
        nome: "João da Silva",
        telefone: "(11) 98765-4321",
        email: "joao.silva@example.com",
        cpf: "123.456.789-00",
        cep: "12345-678",
        rua: "Rua Exemplo",
        numero: "123",
        complemento: "Apto 101",
        bairro: "Bairro Exemplo",
        cidade: "Cidade Exemplo",
        estado: "EX",
        salario: "R$ 2.500,00",
        dataAdmissao: "01/01/2024",
        tipoServico: "Corte de cabelo",
        cargaHoraria: "40 horas semanais",
        horarioTrabalho: "08:00 - 17:00"
      };

  return (
    <div>
      <div>
        <div className={styles.container}>
          <div className={styles.container__menu}>
            <Menu />
          </div>
          <div className={styles.container__main}>
            <BarberInfo values={testValues} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
