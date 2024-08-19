"use client";

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import style from "./cadastrar-produto.module.scss";
import DadosProduto from "./dadosProduto/index";
import * as Yup from "yup";
import { postPromocao } from "@/api/promocoes/postPromocao";
import { APP_ROUTES } from "@/constants/app-routes";
import { useRouter } from "next/navigation";
import DadosEstoque from "./dadosEstoque/index";
import { postProduto } from "@/api/produtos/postProduto";


interface Estoque {
  id: string;
  productId: string;
  quantity: number;
  batch: string;
  expirationDate: string;
  acquisitionDate: string;
}



const NovoEstoque = () => {
  const { push } = useRouter();

  const initialValues = {
      id: "",
      productId: "",
      quantity: 0,
      batch: "",
      expirationDate: "",
      acquisitionDate: "",
  };

  const validateSchema = Yup.object().shape({
   
      quantity: Yup.number().required("Obrigatório"),
      expirationDate: Yup.date().required("Obrigatório"),
      acquisitionDate: Yup.date().required("Obrigatório"),
  });

  const { mutate } = useMutation(
    async (values: Estoque) => {
      console.log(values);

      return postProduto(values);
    },
    {
      onSuccess: (res) => {
        console.log("sucess", res.data)
        push(APP_ROUTES.private.produtos.name); // Ajuste conforme necessário
      },
      onError: (error) => {
        console.log("Erro ao cadastrar uma nova promoção", error);
      },
    }
  );

  return (
    <>
      <div className={style.header}>
        <div className={style.header__title}>
          <h1>Estoque</h1>
          <div className={style.header__title_line}></div>
        </div>
        <div className={style.header__navegacao}>
          <div
            className={style.header__navegacao_voltar}
            onClick={() => push(APP_ROUTES.private.produtos.name)}
          >
            <img src="/assets/icons/menor_que.svg" alt="Voltar" />
            <h1>Voltar</h1>
          </div>
          <div className={style.header__navegacao_guia}>
            <span>Home / Produtos / </span>
            <h1>Cadastrar Estoque</h1>
          </div>
        </div>
      </div>
      <div id="header" className={style.container}>
        <div className={style.container__ContainerForm}>
          <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Entrou!", values)
              mutate(values);
              setSubmitting(false);
            }}
          >
            {(formik) => {
              return (
                <Form className={style.container__ContainerForm_form}>
                  <DadosEstoque formik={formik} />

                  {/* Exemplo: <DadosEstoque formik={formik} /> */}
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

export default NovoEstoque;
