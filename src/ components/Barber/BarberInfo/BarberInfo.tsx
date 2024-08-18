import React from "react";
import styles from "./BarberInfo.module.scss";
import FormButton from "../FormButton";

interface BarberInfoValues {
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  salario: string;
  dataAdmissao: string;
  tipoServico: string;
  cargaHoraria: string;
}

interface BarberInfoProps {
  values: BarberInfoValues;
}

const BarberInfo: React.FC<BarberInfoProps> = ({ values }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userProfile}>
        <div className={styles.photo}>
          <p>Imagem de usuário</p>
        </div>
        <div className={styles.userInfo}>
          <h3>{values.nome}</h3>
          <p>{values.tipoServico}</p>
        </div>
      </div>
      {/* Personal info */} 
      <h3>Informações pessoais</h3>
      <div className={styles.personalInfo}>
        <div className={styles.row}>
          <strong>Nome completo:</strong> {values.nome}
        </div>
        <div className={styles.row}>
          <strong>Telefone:</strong> {values.telefone}
        </div>
        <div className={styles.row}>
          <strong>Email:</strong> {values.email}
        </div>
        <div className={styles.row}>
          <strong>CPF:</strong> {values.cpf}
        </div>
      </div>
      <hr className={styles.line}/>
      {/* Endereço */}
      <h3>Endereço</h3>
      <div className={styles.address}>
        <div className={styles.row}>
          <strong>CEP:</strong> {values.cep}
        </div>
        <div className={styles.row}>
          <strong>Rua:</strong> {values.rua}
        </div>
        <div className={styles.row}>
          <strong>Número:</strong> {values.numero}
        </div>
        <div className={styles.row}>
          <strong>Complemento:</strong> {values.complemento}
        </div>
        <div className={styles.row}>
          <strong>Bairro:</strong> {values.bairro}
        </div>
        <div className={styles.row}>
          <strong>Cidade:</strong> {values.cidade}
        </div>
        <div className={styles.row}>
          <strong>Estado:</strong> {values.estado}
        </div>
      </div>
      <hr className={styles.line}/>
      {/* Admissao */}
      <h3>Informações de Admissão</h3>
      <div className={styles.admissionInfo}>
        <div className={styles.row}>
          <strong>Salário:</strong> {values.salario}
        </div>
        <div className={styles.row}>
          <strong>Data de Admissão:</strong> {values.dataAdmissao}
        </div>
        <div className={styles.row}>
          <strong>Tipo de Serviço:</strong> {values.tipoServico}
        </div>
        <div className={styles.row}>
          <strong>Carga Horária:</strong> {values.cargaHoraria}
        </div>
      </div>
{/*       TODO: Botao de editar deve levar até barbeiro/:id para edição dos campos.
      Deve ser renderizado os campos de registro com os dados existentes ja preenchidos */}
      <FormButton type="submit">Editar</FormButton>
    </div>
  );
};

export default BarberInfo;
