"use client";

import Image from "next/image";
import style from "./table.module.scss";
import { deletePromocao } from "@/api/promocoes/deletePromocao";

interface TableProps {
  table1: string;
  table2: string;
  table3: string;
  table4: string;
  table5: string;
  listPromocoes: Promocao[];
  setPromocoes: (promocoes: Promocao[]) => void;
  onSelectPromocao: (promocao: Promocao) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface Promocao {
  id: string;
  name: string;
  totalPrice: string;
  startDate: string;
  endDate: string;
  coupon: string;
}

const Table: React.FC<TableProps> = ({ 
  listPromocoes, 
  setPromocoes, 
  onSelectPromocao, 
  table1, 
  table2, 
  table3, 
  table4, 
  table5, 
  currentPage, 
  totalPages, 
  setCurrentPage 
}) => {

  const handleDeletePromocao = async (id: string) => {
    await deletePromocao(id);
    setPromocoes(listPromocoes.filter(promocao => promocao.coupon !== id));
  };

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
              {listPromocoes.map((promocao, index) => (
                <tr key={index}>
                  <td>{promocao.name}</td>
                  <td>{promocao.totalPrice}</td>
                  <td>{promocao.startDate}</td>
                  <td>{promocao.endDate}</td>
                  <td>
                    <img 
                      src="/assets/icons/visualizar.svg" 
                      alt="Visualizar" 
                      onClick={() => onSelectPromocao(promocao)} 
                      className={style.content__table__body_click} 
                    />
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
