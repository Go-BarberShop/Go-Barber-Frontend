"use client"

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import style from "./cadastrar-produto.module.scss";
import DadosProduto from "./dadosProduto/index";
import * as Yup from 'yup';
import { postPromocao } from "@/api/promocoes/postPromocao";
import { APP_ROUTES } from "@/constants/app-routes";
import { useRouter } from "next/navigation";

interface Produto {
  id: string;
  name: string;
  brand: string;
  price: string;
  size: string;
}


const CadastrarProduto = () => {
  const { push } = useRouter();

  const initialValues: Produto = {
    id: "",
    name: "",
    brand: "",
    price: "",
    size: "",
  };

  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .required('Obrigatório'),
    totalPrice: Yup.number()
      .required('Obrigatório'),
    startDate: Yup.date()
      .min(new Date(), "O início da promoção não pode ser antes da data atual.")
      .required('Obrigatório'),
    endDate: Yup.date()
      .min(Yup.ref('startDate'), "O fim da promoção não pode ser antes da data de início.")
      .required('Obrigatório'),
    
  });

  const { mutate } = useMutation(
    async (values: Produto) => {
    
      return postPromocao(values);    
    }, {
    onSuccess: () => {
        push(APP_ROUTES.private.produtos.name); // Ajuste conforme necessário
    },
    onError: (error) => {
      console.log("Erro ao cadastrar uma nova promoção", error);
    }
  });

  
  return (
    <>
      <div className={style.header}>
        <div className={style.header__title}>
            <h1>Produtos</h1>
            <div className={style.header__title_line}></div>
        </div>
        <div className={style.header__navegacao}>
          <div className={style.header__navegacao_voltar} onClick={() => (push(APP_ROUTES.private.produtos.name))}>
            <img src="/assets/icons/menor_que.svg" alt="Voltar" />
            <h1>Voltar</h1>
          </div>
          <div className={style.header__navegacao_guia}>
            <span>Home / Produtos / </span><h1>Cadastrar Produto</h1>
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
          {(formik) => {
            return (
              <Form className={style.container__ContainerForm_form}>
                <DadosProduto formik={formik} />
                <div className={style.container__ContainerForm_buttons}>
                  <button
                    className={style.container__ContainerForm_buttons_link}
                    type="button"
                    onClick={() => push(APP_ROUTES.private.produtos.name)}
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
            );
          }}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default CadastrarProduto;