import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { postAppointment } from '@/api/agendamento/postAppointment';
import style from './cadastrar-agendamento.module.scss';
import DadosAgendamento from './DadosAgendamento';
import { APP_ROUTES } from '@/constants/app-routes';
import { Agendamento1 } from '@/interfaces/agendamentoInterface';
import { Servico } from '@/interfaces/servicoInterface';
import { getAllServicos } from '@/api/servicos/getAllServicos';

const CadastroAgendamento = () => {
  const { push } = useRouter();
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        // Passe os argumentos necessários para a função getAllServicos
        const response = await getAllServicos(1, 10); // Exemplo: página 1, tamanho 10
        setServicos(response.data);
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
      }
    };

    fetchServicos();
  }, []);

  const initialValues: Agendamento1 = {
    clientName: '',
    clientNumber: '',
    barberId: 0,
    serviceTypeIds: [],
    startTime: '',
  };

  const validateSchema = Yup.object().shape({
    clientName: Yup.string()
      .min(3, 'O nome do cliente deve ter no mínimo 3 caracteres')
      .required('Obrigatório'),
    clientNumber: Yup.string()
      .min(10, 'O número de contato deve ter no mínimo 10 caracteres')
      .required('Obrigatório'),
    barberId: Yup.number().required('Obrigatório'),
    serviceTypeIds: Yup.array()
      .min(1, 'Selecione pelo menos um serviço')
      .required('Obrigatório'),
    startTime: Yup.string().required('Obrigatório'),
  });

  const { status, mutate } = useMutation(
    async (values: Agendamento1) => {
      return postAppointment(values); // Chamada à API para cadastrar o agendamento
    },
    {
      onSuccess: () => {
        push(APP_ROUTES.private.agendamentos.name); // Redireciona para a lista de agendamentos após o sucesso
      },
      onError: (error) => {
        console.log('Erro ao cadastrar um novo agendamento', error);
      },
    }
  );

  return (
    <>
      <div className={style.header}>
        <div className={style.header__title}>
          <h1>Agendamentos</h1>
          <div className={style.header__title_line}></div>
        </div>
        <div className={style.header__navegacao}>
          <div
            className={style.header__navegacao_voltar}
            onClick={() => push(APP_ROUTES.private.agendamentos.name)}
          >
            <img src="/assets/icons/menor_que.svg" alt="Voltar" />
            <h1>Voltar</h1>
          </div>
          <div className={style.header__navegacao_guia}>
            <span>Agendamentos /</span>
            <h1>Cadastrar Agendamento</h1>
          </div>
        </div>
      </div>
      <div id="header" className={style.container}>
        <div className={style.container__ContainerForm}>
          <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values, { setSubmitting }) => {
              mutate(values);
              setSubmitting(false);
            }}
          >
            {(formik) => (
              <Form className={style.container__ContainerForm_form}>
                <DadosAgendamento formik={formik} servicos={servicos} />
                <div className={style.container__ContainerForm_buttons}>
                  <button
                    className={style.container__ContainerForm_buttons_link}
                    type="button"
                    onClick={() => push(APP_ROUTES.private.agendamentos.name)}
                  >
                    <h1>Voltar</h1>
                  </button>
                  <button
                    type="submit"
                    className={style.container__ContainerForm_buttons_linkWhite}
                  >
                    <h1>Finalizar</h1>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CadastroAgendamento;
