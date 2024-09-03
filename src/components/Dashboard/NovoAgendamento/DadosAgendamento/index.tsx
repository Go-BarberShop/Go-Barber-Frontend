import React from 'react';
import { Field, ErrorMessage, FormikProps } from 'formik';
import style from '../cadastrar-agendamento.module.scss';
import { Agendamento1 } from '@/interfaces/agendamentoInterface'; // Supondo que você criou essa interface
import { Servico } from '@/interfaces/servicoInterface'; // Definição da interface Servico

interface DadosAgendamentoProps {
  formik: FormikProps<Agendamento1>;
  servicos: Servico[];
}

const DadosAgendamento: React.FC<DadosAgendamentoProps> = ({ formik, servicos }) => {
  // Convert the selected service IDs from numbers to strings
  const serviceTypeIds = formik.values.serviceTypeIds.map(String);

  return (
    <>
      <div className={style.container__ContainerForm_title}>
        <h1>Informações do Agendamento</h1>
      </div>
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label>Nome do Cliente</label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="clientName"
            name="clientName"
            placeholder="Digite o nome do cliente"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clientName}
            required
          />
          {formik.touched.clientName && formik.errors.clientName ? (
            <span className={style.form__error}>{formik.errors.clientName}</span>
          ) : null}
        </div>

        <div>
          <label>Número de Contato</label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="clientNumber"
            name="clientNumber"
            placeholder="Digite o número de contato"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clientNumber}
            required
          />
          {formik.touched.clientNumber && formik.errors.clientNumber ? (
            <span className={style.form__error}>{formik.errors.clientNumber}</span>
          ) : null}
        </div>

        <div>
          <label>Barbeiro</label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="barberId"
            name="barberId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.barberId || ''}
          >
            <option value="">Selecione um barbeiro</option>
            {/* Aqui você deve mapear para os barbeiros disponíveis */}
          </select>
          {formik.touched.barberId && formik.errors.barberId ? (
            <span className={style.form__error}>{formik.errors.barberId}</span>
          ) : null}
        </div>

        <div>
          <label>Serviço</label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="serviceTypeIds"
            name="serviceTypeIds"
            multiple
            onChange={e => {
              const options = e.target.options;
              const values: number[] = [];
              for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                  values.push(parseInt(options[i].value, 10));
                }
              }
              formik.setFieldValue('serviceTypeIds', values);
            }}
            onBlur={formik.handleBlur}
            value={serviceTypeIds}
          >
            {servicos && servicos.length > 0 ? (
              servicos.map(servico => (
                <option key={servico.id} value={servico.id}>
                  {servico.name}
                </option>
              ))
            ) : (
              <option value="">Nenhum serviço disponível</option>
            )}
          </select>
          {formik.touched.serviceTypeIds && formik.errors.serviceTypeIds ? (
            <span className={style.form__error}>{formik.errors.serviceTypeIds}</span>
          ) : null}
        </div>

        <div>
          <label>Horário de Início</label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="startTime"
            name="startTime"
            type="datetime-local"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startTime}
            required
          />
          {formik.touched.startTime && formik.errors.startTime ? (
            <span className={style.form__error}>{formik.errors.startTime}</span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DadosAgendamento;
