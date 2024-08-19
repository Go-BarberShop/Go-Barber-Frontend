"use client";

import style from "./table.module.scss";

interface TableProps {
  table1: string;
  table2: string;
  table3: string;
  table4: string;
  table5: string;
  listProdutos: Produto[];
  setProdutos: (produto: Produto[]) => void;
  onSelectProduto: (produto: Produto) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface Produto {
  id: string;
  name: string;
  brand: string;
  price: string;
  size: string;
  description: string;

}
const produtoMock: Produto[] = [
  {
    id: "1",
    name: "Produto Exemplo",
    brand: "Marca Exemplo",
    price: "R$ 100,00",
    size: "150g",
    description: "asdfasdfaf",

  },
  {
    id: "2",
    name: "Outro Produto",
    brand: "Outra Marca",
    price: "R$ 150,00",
    size: "300g",
    description: "asdfaasdasdfaf",

  },
];

const Table: React.FC<TableProps> = ({ 
  listProdutos,  
  onSelectProduto, 
  table1, 
  table2, 
  table3, 
  table4, 
  table5, 
  currentPage, 
  totalPages, 
  setCurrentPage 
}) => {

 // const handleDeletePromocao = async (id: string) => {
//    await deletePromocao(id);
 //   setPromocoes(listPromocoes.filter(promocao => promocao.coupon !== id));
 // };

  return (
    <>
        <div className={style.content}>
          <table className={style.content__table}>
            <thead className={style.content__table__header}>
              <tr>
                <th>{table1}</th>
                <th>{table2}</th>
                <th>{table3}</th>
                <th>{table4}</th>
                <th className={style.content__table__header_name3}>
                  <div>
                    {table5}
                    <img src="/assets/icons/informacao.svg" alt="Visualizar" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className={style.content__table__body}>
            {produtoMock.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.name}</td>
                  <td>{produto.brand}</td>
                  <td>{produto.price}</td>
                  <td>{produto.size}</td>
                  <td>
                  <button 
                    onClick={() => onSelectProduto(produto)} 
                    className={style.content__table__body_click}
                  >
                    <img 
                      src="/assets/icons/visualizar.svg" 
                      alt="Visualizar" 
                    />
                  </button>
                    <img 
                      src="/assets/icons/enviar.svg" 
                      alt="Enviar" 
                      className={style.content__table__body_click} 
                    />
                  </td>
                </tr>
              ))}
              {listProdutos.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.name}</td>
                  <td>{produto.brand}</td>
                  <td>{produto.price}</td>
                  <td>{produto.size}</td>
                  <td>
                  <button 
                    onClick={() => onSelectProduto(produto)} 
                    className={style.content__table__body_click}
                  >
                    <img 
                      src="/assets/icons/visualizar.svg" 
                      alt="Visualizar" 
                    />
                  </button>
                    <img 
                      src="/assets/icons/enviar.svg" 
                      alt="Enviar" 
                      className={style.content__table__body_click} 
                    />
                  </td>
                </tr>
              ))}
              {/* Pagination Controls */}
            </tbody>
          </table>
              <div className={style.content__table__pagination}>
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
                  Previous
                </button>
                <span>Page {currentPage + 1} of {totalPages}</span>
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))} disabled={currentPage === totalPages - 1}>
                  Next
                </button>
              </div>
        </div>

    </>
  );
};

export default Table;
