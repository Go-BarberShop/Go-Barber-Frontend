"use client"


import { Form, Formik } from "formik";
import { useEffect, useState } from "react";

import style from "./detalhar-promocao.module.scss";

import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";
import DadosPromocao from "./DadosProduto";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { putPromocaoById } from "@/api/promocoes/putPromocaoById";
import { APP_ROUTES } from "@/constants/app-routes";

interface DetalharProdutoProps {
    hrefAnterior: string;
    diretorioAtual: string;
    dirAnt: string;
    hrefAtual: string;
    backDetalhamento: () => void;
    produto: Produto;
}
interface Produto {
  id: string;
  name: string;
  brand: string;
  price: string;
  size: string;
  description: string;
}


  const DetalharProduto : React.FC<DetalharProdutoProps> = ({ hrefAnterior, backDetalhamento, produto }) => {

    const { push } = useRouter();
    const [editar, setEditar] = useState(false);

  const [formData, setFormData] = useState({
    id: produto.id,
    name: '',
    brand: '',
    price: '',
    size: '',
    description: '',
  })

  useEffect(() => {
    if (produto) {
      setFormData({
        id: produto.id,
        name: produto.name || '',
        brand: produto.brand || '',
        price: produto.price || '',
        size: produto.size || '',
        description: produto.description || '',
      })
    }
  }, [produto]);


  const { mutate } = useMutation(
    async (values: Produto) => {
        console.log(values);
      return putPromocaoById(produto.id, values);
    }, {
    onSuccess: () => {
        push(APP_ROUTES.private.produtos.name); 
    },
    onError: (error) => {
      console.log("Erro ao cadastrar um novo produto", error);
    }
  });


  return (
    <div id="header" className={style.container}>
        <HeaderDetalhamento
            titulo="Produtos"
            hrefAnterior={backDetalhamento}
            diretorioAnterior="Home / Produtos / "
            diretorioAtual="Informações do produto"

       />
      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={formData}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            mutate(values)
            setSubmitting(false);

            
          }}
        >
          
          {(formik) => {
            return (

              <Form
                className={style.container__ContainerForm_form}
              >
                  <div className={style.container__header}>
                     <div className={style.container__header_title}>
                      <h1>Informações do produto</h1>
                      </div>
                      {editar === false ? (
                      <button
                          onClick={() => setEditar(true)}
                          className={style.container__header_button}>

                          <span>Editar</span>
                          {/*<Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} /> */}
                      </button >
                      ) : (
                      <button
                          onClick={() => setEditar(false)}
                          className={style.container__header_button}>

                          <span>Salvar</span>
                          {/*<Image src="/assets/iconLapis.svg" alt="editar perfil" width={25} height={25} />*/}
                      </button >
                      )}
                  </div>


                <DadosPromocao formik={formik} editar={editar} hrefAnterior={hrefAnterior} />
                {/*
                  hrefAnterior === "/agricultores" && (
                    <DadosAtividadesRurais formik={formik} editar={editar} />
                  )*/
                }
               
              </Form >
            )
          }
          }
        </Formik >
      </div >

    </div >
  );
}


export default DetalharProduto;