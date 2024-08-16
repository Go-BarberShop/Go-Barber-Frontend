"use client"

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
}

interface Promocao {
  name: string;
  totalPrice: number;
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
  table5 
}) => {

  const handleDeletePromocao = async (id: string) => {
    await deletePromocao(id);
    setPromocoes(listPromocoes.filter(promocao => promocao.coupon !== id));
  }

  return (
    <>
      <div className={style.contentBigger}>
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
            <tr >
                  <td>Corte e Barba</td>
                  <td>R$ 49.90</td>
                  <td>25/09/24</td>
                  <td>25/10/24</td>
                  <td>
                    <img 
                      src="/assets/icons/visualizar.svg" 
                      alt="Visualizar" 
          
                      className={style.content__table__body_click} 
                    />
                    <img 
                      src="/assets/icons/enviar.svg" 
                      alt="Enviar" 
          
                      className={style.content__table__body_click} 
                    />
                    {/*<ExcluirButton itemId={promocao.coupon} onDelete={handleDeletePromocao} /> */}
                  </td>
                </tr>
              {listPromocoes.map((promocao, index) => (
                <tr key={index}>
                  <td>{promocao.name}</td>
                  <td>{promocao.totalPrice}</td>
                  <td>{promocao.startDate}</td>
                  <td>{promocao.endDate}</td>
                  <td>
                    <img 
                      src="/assets/icons/sair.svg" 
                      onClick={() => onSelectPromocao(promocao)} 
                      alt="Visualizar" 
                      className={style.content__table__body_click} 
                    />
                    {/*<ExcluirButton itemId={promocao.coupon} onDelete={handleDeletePromocao} /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={style.contentSmall}>
        <div className={style.content}>
          <table className={style.content__table}>
            <tbody className={style.content__table__body}>
              {listPromocoes.map((promocao, index) => (
                <tr key={index}>
                  <td data-label={table1}>{promocao.name}</td>
                  <td data-label={table2}>{promocao.totalPrice}</td>
                  <td data-label={table3}>{promocao.startDate}</td>
                  <td data-label={table4}>{promocao.endDate}</td>
                  <td className={style.content__table__buttonTabela}>
                    <div className={style.content__table__button}>
                      <h1>Visualizar</h1>
                      <Image 
                        className={style.content__table__button_img} 
                        src="/assets/iconOlhoBranco.png" 
                        onClick={() => onSelectPromocao(promocao)} 
                        alt="Visualizar" 
                        width={27} 
                        height={26} 
                      />
                      {/*<ExcluirButton itemId={promocao.coupon} onDelete={handleDeletePromocao} />*/}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
