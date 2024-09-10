"use client";
import InputMask from "react-input-mask";
import style from "./admissao.module.scss";
interface DadosSecretariaProps {
  formik: any;
  editar: boolean;
  hrefAnterior: string;
}

const DadosAdmissao: React.FC<DadosSecretariaProps> = ({ formik, editar  }) => {

  return (
    <>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          <label htmlFor="salary">Salario</label>
          <input
            id="salary"
            className={style.container__ContainerForm_form_input}
            name="salary"
            placeholder="Não informado"
            onBlur={formik.handleBlur}
            value={formik.values.salary}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
          />
        </div>

        <div>
          <label htmlFor="admissionDate">Data de Admissão </label>
          <input
            id="admissionDate"
            className={style.container__ContainerForm_form_input}
            name="admissionDate"
            type="date"
            placeholder="Não informado"
            onBlur={formik.handleBlur}
            value={formik.values.admissionDate}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
          />
        </div>

        <div>
          <label htmlFor="workload">Jornada de Trabalho</label>
          <input
            id="workload"
            className={style.container__ContainerForm_form_input}
            name="workload"
            placeholder="Não informado"
            value={formik.values.workload}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
          />
        </div>

        <div>
          <label htmlFor="start">Início de Expediente</label>
          <InputMask
            mask="99:99"
            id="start"
            className={style.container__ContainerForm_form_input}
            name="start"
            placeholder="00:00"
            value={formik.values.start}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <label htmlFor="end">Fim de Expediente</label>
          <InputMask
            mask="99:99"
            id="end"
            className={style.container__ContainerForm_form_input}
            name="end"
            placeholder="00:00"
            value={formik.values.end}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
    </>
  );
};

export default DadosAdmissao;
