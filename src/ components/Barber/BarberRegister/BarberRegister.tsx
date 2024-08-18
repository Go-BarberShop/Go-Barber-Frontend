"use client";

import styles from "./BarberRegister.module.scss";
import BarberInput from "@/ components/Barber/BarberInput";
import FormButton from "@/ components/Barber/FormButton";
import SelectBarber from "@/ components/Barber/SelectBarber";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function BarberRegister() {
  const [serviceType] = useState([
    { id: 1, name: "Corte de Barba" },
    { id: 2, name: "Corte de Cabelo" },
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

  const initialValues = {
    name: "",
    email: "",
    telefone: "",
    cpf: "",
    // endereço
    cep: "",
    rua: "",
    cidade: "",
    numero: "",
    bairro: "",
    estado: "",
    // admissão
    salario: "",
    dataAdmissao: "",
    serviceType: "", 
    workload: "",
    workSchedule: "",
  };

  const validateSchema = Yup.object().shape({
    // info pessoal
    name: Yup.string()
      .min(5, "O nome de usuário deve ter no mínimo 5 caracteres")
      .max(20, "O nome de usuário não deve passar de 20 caracteres")
      .required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    telefone: Yup.string().required("Telefone é obrigatório"),
    cpf: Yup.string().required("Cpf é obrigatório"),
    // Endereço
    cep: Yup.string(),
    rua: Yup.string(),
    cidade: Yup.string(),
    numero: Yup.string(),
    bairro: Yup.string(),
    estado: Yup.string(),
    // info contrato
    salario: Yup.number()
      .required("Salário é obrigatório")
      .typeError("Salário deve ser um número"),
    dataAdmissao: Yup.date().required("Data de admissão é obrigatória"),
  });

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Valores: ", values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
        }) => (
          <Form>
            <h3>Informações pessoais</h3>
            <img className={styles.img} src={"../../../../public/blank-profile-picture-973460_1280.webp"} alt="" />
            <div className={styles.personalInfo}>
              <div className={styles.flexRow}>
                <BarberInput
                  type="text"
                  label="Nome"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name}
                />
                <BarberInput
                  type="text"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />
              </div>
              <div className={styles.flexRow}>
                <BarberInput
                  type="text"
                  label="Telefone"
                  name="telefone"
                  value={values.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.telefone && errors.telefone}
                />
                <BarberInput
                  type="text"
                  label="CPF"
                  name="cpf"
                  value={values.cpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.cpf && errors.cpf}
                />
              </div>
            </div>

            <h3>Endereço</h3>
            <div className={styles.address}>
              <div className={styles.flexRow}>
                <BarberInput
                  size="large"
                  type="text"
                  label="CEP"
                  name="cep"
                  value={values.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.cep && errors.cep}
                />
                <BarberInput
                  size="large"
                  type="text"
                  label="Rua"
                  name="rua"
                  value={values.rua}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.rua && errors.rua}
                />
                <BarberInput
                  size="large"
                  type="text"
                  label="Cidade"
                  name="cidade"
                  value={values.cidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.cidade && errors.cidade}
                />
              </div>
              <div className={styles.flexRow}>
                <BarberInput
                  size="large"
                  type="text"
                  label="Número"
                  name="numero"
                  value={values.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.numero && errors.numero}
                />
                <BarberInput
                  size="large"
                  type="text"
                  label="Bairro"
                  name="bairro"
                  value={values.bairro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.bairro && errors.bairro}
                />
                <BarberInput
                  size="large"
                  type="text"
                  label="Estado"
                  name="estado"
                  value={values.estado}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.estado && errors.estado}
                />
              </div>
            </div>
            <h3>Informações de admissão</h3>
            <div className={styles.admissionInfo}>
              <div className={styles.admissionTop}>
                <BarberInput
                  size="large"
                  type="text"
                  label="Salário"
                  name="salario"
                  value={values.salario}
                  onChange={(e) => {
                    // Converta o valor para número
                    setFieldValue("salario", Number(e.target.value));
                  }}
                  onBlur={handleBlur}
                  error={touched.salario && errors.salario}
                />
                <BarberInput
                  type="date"
                  label="Data de Admissão"
                  name="dataAdmissao"
                  value={values.dataAdmissao}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.dataAdmissao && errors.dataAdmissao}
                />
              </div>
              <div className={styles.selectArea}>
                <div className={styles.flexRow}>
                  <SelectBarber
                    optionArray={serviceType}
                    label="Tipo de serviço"
                    value={values.serviceType}
                    onChange={(e) =>
                      setFieldValue("serviceType", e.target.value)
                    }
                  />
                </div>
                <div className={styles.flexRow}>
                  <SelectBarber
                    optionArray={workload}
                    label="Carga horária semanal"
                    value={values.workload}
                    onChange={(e) => setFieldValue("workload", e.target.value)}
                  />
                </div>
                <div className={styles.flexRow}>
                  <SelectBarber
                    optionArray={workSchedule}
                    label="Horários de trabalho"
                    value={values.workSchedule}
                    onChange={(e) =>
                      setFieldValue("workSchedule", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <FormButton type="submit">Concluir</FormButton>
              <FormButton type="cancel">Cancelar</FormButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
