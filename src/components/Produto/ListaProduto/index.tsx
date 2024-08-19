import { useEffect, useState } from "react";
import style from "./produto.module.scss";
import { useMutation } from "react-query";

import Table from "./Table";
import { getAllPromocoes } from "@/api/promocoes/getAllPromocoes";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";
import DetalharProduto from "../DetalharProduto";

interface Produto {
  id: string;
  name: string;
  brand: string;
  price: string;
  size: string;
  description: string;
}


const ListaProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);
  const [searchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { push } = useRouter();

  const { mutate } = useMutation(() => getAllPromocoes(currentPage, 3), {
    onSuccess: (res) => {
      setProdutos(res.data.content);
      setTotalPages(res.data.totalPages);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as promoções:', error);
    }
  });

  useEffect(() => {
    //mutate();
  }, [currentPage]);

  const filteredProdutos = produtos.filter((produto) =>
    produto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProduto = (produto: Produto) => {
    setSelectedProduto(produto);
  };

  const handleBackToList = () => {
    setSelectedProduto(null);
  };

  if (selectedProduto) {
    return <DetalharProduto
      diretorioAtual="dirAtual"
      produto={selectedProduto}
      backDetalhamento={handleBackToList}
      dirAnt="dirAnt"
      hrefAnterior={APP_ROUTES.private.home.name}
      hrefAtual={APP_ROUTES.private.promocoes.name}
    />
  }

  return (
    <div>
      <div className={style.header}>
        <HeaderDetalhamento
          titulo="Produtos"
          hrefAnterior={APP_ROUTES.private.home.name}
          diretorioAnterior="Home /"
          diretorioAtual="Produtos"
        />
        <div className={style.header__container}>
         <div className={style.header__container_botoes}>
            <button onClick={() => (push(APP_ROUTES.private.cadastrar_produtos.name))}>
              <h1>
                Adicionar Produto
              </h1>
              <img src="/assets/icons/sexta.svg" alt="Navalha" />
            </button>
          </div>
        </div>
      </div>

      <Table
        listProdutos={filteredProdutos}
        setProdutos={setProdutos}
        onSelectProduto={handleSelectProduto}
        table1="Nome"
        table2="Marca"
        table3="Valor"
        table4="Peso"
        table5="Ações"
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ListaProdutos;