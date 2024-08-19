"use client";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import style from "./detalhar-promocao.module.scss";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";
import DadosPromocao from "./DadosProduto";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { putPromocaoById } from "@/api/promocoes/putPromocaoById";
import { APP_ROUTES } from "@/constants/app-routes";
import ListaEstoque from "../ListaEstoque";
import DetalharEstoque from "../DetalharEstoque"; // Assuming this is the component that shows stock details

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
interface Estoque {
  id: string;
  productId: string;
  quantity: number;
  batch: string;
  expirationDate: string;
  acquisitionDate: string;
}
const DetalharProduto: React.FC<DetalharProdutoProps> = ({
  hrefAnterior,
  backDetalhamento,
  produto,
}) => {
  const { push } = useRouter();
  const [editar, setEditar] = useState(false);
  const [selectedEstoque, setSelectedEstoque] = useState<Estoque | null>(null);

  const [formData, setFormData] = useState({
    id: produto.id,
    name: "",
    brand: "",
    price: "",
    size: "",
    description: "",
  });

  useEffect(() => {
    if (produto) {
      setFormData({
        id: produto.id,
        name: produto.name || "",
        brand: produto.brand || "",
        price: produto.price || "",
        size: produto.size || "",
        description: produto.description || "",
      });
    }
  }, [produto]);

  const { mutate } = useMutation(
    async (values: Produto) => {
      console.log(values);
      return putPromocaoById(produto.id, values);
    },
    {
      onSuccess: () => {
        push(APP_ROUTES.private.produtos.name);
      },
      onError: (error) => {
        console.log("Erro ao cadastrar um novo produto", error);
      },
    }
  );

  const handleSelectEstoque = (estoque: Estoque) => {
    setSelectedEstoque(estoque);
  };

  if (selectedEstoque) {
    return (
      <DetalharEstoque
        diretorioAtual="dirAtual"
        estoque={selectedEstoque}
        backDetalhamento={() => setSelectedEstoque(null)}
        dirAnt="dirAnt"
        hrefAnterior={APP_ROUTES.private.home.name}
        hrefAtual={APP_ROUTES.private.promocoes.name}
      />
    );
  }

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
            mutate(values);
            setSubmitting(false);
          }}
        >
          {(formik) => {
            return (
              <Form className={style.container__ContainerForm_form}>
                <div className={style.container__header}>
                  <div className={style.container__header_title}>
                    <h1>Informações do produto</h1>
                  </div>
                  {editar === false ? (
                    <button
                      onClick={() => setEditar(true)}
                      className={style.container__header_button}
                    >
                      <span>Editar</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditar(false)}
                      className={style.container__header_button}
                    >
                      <span>Salvar</span>
                    </button>
                  )}
                </div>

                <DadosPromocao formik={formik} editar={editar} hrefAnterior={hrefAnterior} />
              </Form>
            );
          }}
        </Formik>
        <div>
          <ListaEstoque onSelectEstoque={handleSelectEstoque} />
        </div>
      </div>
    </div>
  );
};

export default DetalharProduto;
