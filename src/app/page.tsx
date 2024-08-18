import React from 'react';
import BarberInfo from '@/ components/Barber/BarberInfo/BarberInfo';

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
  };

  return (
    <div>
      <BarberInfo values={testValues} />
    </div>
  );
};

export default page;
