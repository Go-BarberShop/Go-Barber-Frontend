"use client";

import style from "./table.module.scss";

interface TableProps {
  table1: string;
  table2: string;
  table3: string;
  table5: string;
  listEstoques: Estoque[];
  setEstoques: (estoque: Estoque[]) => void;
  onSelectEstoque: (estoque: Estoque) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


interface Estoque {
  id: string;
  productId: string;
  quantity: number;
  batch: string;
  expirationDate: string;
  acquisitionDate: string;
}
const estoqueMock: Estoque[] = [
  {
    id: "1",
    productId: "1",
    quantity: 0,
    batch: "sdfas",
    expirationDate: "asdf",
    acquisitionDate: "asdfa",

  },
  {
    id: "2",
    productId: "1",
    quantity: 0,
    batch: "sdfas",
    expirationDate: "asdf",
    acquisitionDate: "asdfa",

  },
];

const Table: React.FC<TableProps> = ({ 
  listEstoques,  
  onSelectEstoque, 
  table1, 
  table2, 
  table3, 
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
                <th className={style.content__table__header_name3}>
                  <div>
                    {table5}
                    <img src="/assets/icons/informacao.svg" alt="Visualizar" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className={style.content__table__body}>
            {estoqueMock.map((estoque, index) => (
                <tr key={index}>
                  <td>{estoque.acquisitionDate}</td>
                  <td>{estoque.expirationDate}</td>
                  <td>{estoque.quantity}</td>
                  <td>
                  <button 
                    onClick={() => onSelectEstoque(estoque)} 
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
              {listEstoques.map((estoque, index) => (
                <tr key={index}>
                  <td>{estoque.acquisitionDate}</td>
                  <td>{estoque.expirationDate}</td>
                  <td>{estoque.quantity}</td>
                  <td>
                  <button 
                    onClick={() => onSelectEstoque(estoque)} 
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
