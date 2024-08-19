import React from "react";
import styles from "./BarberInfo.module.scss";
import FormButton from "../FormButton";
import { APP_ROUTES } from "@/constants/app-routes";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";

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
    <>
    <HeaderDetalhamento titulo="Barbeiros" diretorioAnterior="Gerenciar Barbeiros /" diretorioAtual={values.nome} hrefAnterior={APP_ROUTES.private.barbeiros}/>
      <div className={styles.container}>
        <div className={styles.userProfile}>
          <div className={styles.photo}>
            <p>Imagem de usuário</p>
          </div>
          <div className={styles.userInfo}>
            <h2>{values.nome}</h2>
            <p>{values.tipoServico}</p>
          </div>
        </div>
        {/* Personal info */}
        <h2>Informações pessoais</h2>
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
        <hr className={styles.line} />
        {/* Endereço */}
        <h2>Endereço</h2>
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
        <hr className={styles.line} />
        {/* Admissao */}
        <h2>Informações de Admissão</h2>
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
        <FormButton type="submit">Editar</FormButton>
      </div>
    </>
  );
};

export default BarberInfo;
