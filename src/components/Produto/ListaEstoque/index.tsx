import { useEffect, useState } from "react";
import style from "./estoque.module.scss";
import { useMutation } from "react-query";
import Table from "./Table";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import { getAllProdutos } from "@/api/produtos/getAllProdutos";

interface Estoque {
  id: string;
  productId: string;
  quantity: number;
  batch: string;
  expirationDate: string;
  acquisitionDate: string;
}

interface ListaEstoqueProps {
  onSelectEstoque: (estoque: Estoque) => void; // Nova prop para selecionar um estoque
}

const ListaEstoque: React.FC<ListaEstoqueProps> = ({ onSelectEstoque }) => {
  const [estoques, setEstoques] = useState<Estoque[]>([]);
  const [searchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { push } = useRouter();

  const { mutate } = useMutation(() => getAllProdutos(currentPage, 3), {
    onSuccess: (res) => {
      setEstoques(res.data.content);
      setTotalPages(res.data.totalPages);
    },
    onError: (error) => {
      console.error('Erro ao recuperar os estoques:', error);
    }
  });

  useEffect(() => {
    //mutate();
  }, [currentPage]);

  const filteredEstoques = estoques.filter((estoque) =>
    estoque?.batch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={style.header}>
        <div className={style.header__container}>
          <div></div>
          <div className={style.header__container_title}>
            <h1>Estoques</h1>
          </div>
          <div className={style.header__container_botoes}>
            <button onClick={() => (push(APP_ROUTES.private.novo_estoque.name))}>
              <h1>
                Novo Estoque
              </h1>
              <img src="/assets/icons/navalha.svg" alt="Navalha" />
            </button>
          </div>
        </div>
      </div>

      <Table
        listEstoques={filteredEstoques}
        setEstoques={setEstoques}
        onSelectEstoque={onSelectEstoque} // Passando a função de seleção para a tabela
        table1="Compra"
        table2="Validade"
        table3="Quantidade"
        table5="Ações"
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ListaEstoque;
