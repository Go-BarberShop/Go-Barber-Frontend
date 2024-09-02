"use client";

import { Form, Formik} from "formik";
import { useEffect, useState } from "react";
import style from "./detalharAgendamento.module.scss"
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";
import DadosAgendamento from "../DadosAgendamento";
import { Agendamento } from "@/interfaces/agendamentoInterface";

interface DetalharAgendamentoProps {
  hrefAnterior: string;
  backDetalhamento: () => void;
  agendamento: Agendamento;
}

const DetalharAgendamento: React.FC<DetalharAgendamentoProps> = ({
  hrefAnterior,
  backDetalhamento,
  agendamento,
}) => {

  const [formData, setFormData] = useState({
    barber: agendamento.barber,
    clientName: agendamento.clientName || '',
    clientNumber: agendamento.clientNumber || '',
    startTime: agendamento.startTime || '',
    endTime: agendamento.endTime || '',
    services: agendamento.barber.services || [],
    serviceType: agendamento.serviceType || [],
  });

  useEffect(() => {
    if (agendamento) {
      setFormData({
        barber: agendamento.barber,
        clientName: agendamento.clientName,
        clientNumber: agendamento.clientNumber || '',
        startTime: agendamento.startTime || '',
        endTime: agendamento.endTime || '',
        services: agendamento.barber.services || [],
        serviceType: agendamento.serviceType || [],
      });
    }
  }, [agendamento]);

  return (
    <div id="header" className={style.container}>
      <HeaderDetalhamento
        titulo="Agendamentos"
        hrefAnterior={backDetalhamento}
        diretorioAnterior="Home / Agendamentos / "
        diretorioAtual="Informações do Agendamento"
      />
      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={formData}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            /* mutate(values); */
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <Form className={style.container__ContainerForm_form}>
              <div className={style.container__header}>
                <div className={style.container__header_title}>
                  <h1>Informações do Agendamento</h1>
                </div>
              </div>
              <DadosAgendamento formik={formik} hrefAnterior={hrefAnterior} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DetalharAgendamento;
