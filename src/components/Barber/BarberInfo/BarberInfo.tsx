import React, { useState } from "react";
import { Form, Formik } from "formik";
import styles from "./BarberInfo.module.scss";
import { APP_ROUTES } from "@/constants/app-routes";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { putBarbeiroById } from "@/api/barbeiro/putBarbeiroById";
import BarberInput from "../BarberInput";

interface BarberInfoValues {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  cep: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  salario: number;
  dataAdmissao: string;
  tipoServico: string;
  cargaHoraria: number;
}

interface BarberInfoProps {
  hrefAnterior: string;
  diretorioAtual: string;
  dirAnt: string;
  hrefAtual: string;
  backDetalhamento: () => void;
  barbeiro: BarberInfoValues;
}

const BarberInfo: React.FC<BarberInfoProps> = ({ hrefAnterior, backDetalhamento, barbeiro }) => {
  const { push } = useRouter();
  const [editar, setEditar] = useState(false);

  const { mutate } = useMutation(
    async (values: BarberInfoValues) => {
      return putBarbeiroById(values.id, values);
    }, {
      onSuccess: () => {
        push(APP_ROUTES.private.barbeiros.name);
      },
      onError: (error) => {
        console.log("Erro ao atualizar barbeiro", error);
      }
    });

  return (
    <>
      <HeaderDetalhamento 
        titulo="Barbeiros" 
        diretorioAnterior="Gerenciar Barbeiros /" 
        diretorioAtual={barbeiro.nome} 
        hrefAnterior={APP_ROUTES.private.barbeiros}
      />
      <div className={styles.container}>
        <Formik
          initialValues={barbeiro}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            mutate(values);
            setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.userProfile}>
                <div className={styles.photo}>
                  <p>Imagem de usuário</p>
                </div>
                <div className={styles.userInfo}>
                  <h2>{values.nome}</h2>
                  <p>{values.tipoServico}</p>
                </div>
              </div>

              <h2>Informações pessoais</h2>
              <div className={styles.personalInfo}>
                <BarberInput
                  type="text"
                  label="Nome completo:"
                  name="nome"
                  value={values.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined} // Você pode adicionar lógica para mostrar erros
                />
                <BarberInput
                  type="text"
                  label="Telefone:"
                  name="telefone"
                  value={values.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="email"
                  label="Email:"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="text"
                  label="CPF:"
                  name="cpf"
                  value={values.cpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
              </div>

              <hr className={styles.line} />
              <h2>Endereço</h2>
              <div className={styles.address}>
                <BarberInput
                  type="text"
                  label="CEP:"
                  name="cep"
                  value={values.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="text"
                  label="Rua:"
                  name="rua"
                  value={values.rua}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="number"
                  label="Número:"
                  name="numero"
                  value={values.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="text"
                  label="Complemento:"
                  name="complemento"
                  value={values.complemento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="text"
                  label="Bairro:"
                  name="bairro"
                  value={values.bairro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="text"
                  label="Cidade:"
                  name="cidade"
                  value={values.cidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="text"
                  label="Estado:"
                  name="estado"
                  value={values.estado}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
              </div>

              <hr className={styles.line} />
              <h2>Informações de Admissão</h2>
              <div className={styles.admissionInfo}>
                <BarberInput
                  type="number"
                  label="Salário:"
                  name="salario"
                  value={values.salario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="date"
                  label="Data de Admissão:"
                  name="dataAdmissao"
                  value={values.dataAdmissao}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="text"
                  label="Tipo de Serviço:"
                  name="tipoServico"
                  value={values.tipoServico}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
                <BarberInput
                  type="number"
                  label="Carga Horária:"
                  name="cargaHoraria"
                  value={values.cargaHoraria}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  error={undefined}
                />
              </div>

              <div className={styles.formButton}>
                <button
                  type="button"
                  onClick={() => setEditar(!editar)}
                  className={styles.container__header_button}
                >
                  {editar ? 'Salvar' : 'Editar'}
                </button>
                {editar && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.container__header_button}
                  >
                    Salvar
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default BarberInfo;
