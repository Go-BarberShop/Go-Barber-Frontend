"use client";
import React, { useEffect, useState } from 'react';
import { Field, ErrorMessage, FormikProps } from 'formik';
import style from '../cadastrar-agendamento.module.scss';
import { Agendamento1 } from '@/interfaces/agendamentoInterface';
import { useMutation } from 'react-query';
import { getAllBarbers } from '@/api/barbeiro/getAllBarbers';
import { useRouter } from 'next/navigation';
import { Barbeiro } from '@/interfaces/barbeiroInterface';

interface Servico {
  id: number;
  name: string;
  description?: string;
  time?: number;
  value?: number;
}

interface DadosAgendamentoProps {
  formik: FormikProps<Agendamento1>;
}

const DadosAgendamento: React.FC<DadosAgendamentoProps> = ({ formik }) => {
  const serviceTypeIds = formik.values.serviceTypeIds.map(String);
  const [barbeiros, setBarbeiros] = useState<Barbeiro[]>([]);
  const [filteredServicos, setFilteredServicos] = useState<Servico[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { push } = useRouter();

  const { mutate } = useMutation(() => getAllBarbers(currentPage, 10), {
    onSuccess: (res) => {
      setBarbeiros(res.data.content);
      setTotalPages(res.data.totalPages);
    },
    onError: (error) => {
      console.error('Erro ao recuperar os barbeiros:', error);
    }
  });

  useEffect(() => {
    mutate();
  }, [currentPage]);

  // Função que filtra os serviços com base no barbeiro selecionado
  const filterServicesByBarbeiro = (barberId: string) => {
    // Aqui, a comparação ocorre diretamente entre strings
    const barbeiro = barbeiros.find(b => b.idBarber == barberId);
    
    if (barbeiro && barbeiro.services && Array.isArray(barbeiro.services)) {
      // Atualiza a lista de serviços com os serviços associados ao barbeiro
      setFilteredServicos(barbeiro.services);
    } else {
      // Limpa os serviços se o barbeiro não tiver serviços
      setFilteredServicos([]);
    }
  };

  const handleSelectBarbeiro = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const barberId = event.target.value;
    formik.setFieldValue("barberId", barberId); // Atualiza o campo barbeiro no formik
    filterServicesByBarbeiro(barberId); // Filtra os serviços com base no barbeiro selecionado
  };

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
            onChange={handleSelectBarbeiro}
            onBlur={formik.handleBlur}
            value={formik.values.barberId || ''}
          >
            <option value="">Selecione um barbeiro</option>
            {barbeiros.map((barbeiro) => (
              <option key={barbeiro.idBarber} value={barbeiro.idBarber}>
                {barbeiro.name}
              </option>
            ))}
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
            value={formik.values.serviceTypeIds.map(String)}
          >
            {filteredServicos.length > 0 ? (
              filteredServicos.map(servico => (
                <option key={servico.id} value={servico.id.toString()}>
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
