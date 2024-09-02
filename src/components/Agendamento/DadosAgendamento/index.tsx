"use client";

import style from "./DadosAgendamento.module.scss";

interface DadosAgendamentoProps {
  formik: any;
  hrefAnterior: string;
}

const DadosAgendamento: React.FC<DadosAgendamentoProps> = ({
  formik,
  hrefAnterior,
}) => {
  return (
    <>
      <div className={style.container__ContainerForm_form_halfContainer}>
          <>
            <div>
              <label htmlFor="name">Nome do cliente</label>
              <input
                id="name"
                className={style.container__ContainerForm_form_input}
                name="name"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.clientName}
                disabled
              />
            </div>
            <div>
              <label htmlFor="date">Data</label>
              <input
                id="date"
                className={style.container__ContainerForm_form_input}
                name="date"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.startTime}
                disabled
              />
            </div>
            <div>
              <label htmlFor="price">Valor</label>
              <input
                id="price"
                className={style.container__ContainerForm_form_input}
                name="price"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.serviceType[0].valueService}
                disabled
              />
            </div>
            <div>
              <label htmlFor="services">Serviços</label>
              <input
                id="services"
                className={style.container__ContainerForm_form_input}
                name="services"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.services.map((service: any) => service.name).join(', ')}
                disabled
              />
            </div>
          </>
      </div>
    </>
  );
};

export default DadosAgendamento;
