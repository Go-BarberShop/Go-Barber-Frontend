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
  id: string;
  name: string;
  totalPrice: string;
  startDate: string;
  endDate: string;
  coupon: string;
}

const mockPromocao: Promocao = {
  id: "00",
  name: "Corte e Barba",
  totalPrice: "49.90",
  startDate: "2024-11-30",
  endDate: "2024-12-30",
  coupon: "12313"
};

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
              <tr>
                <td>{mockPromocao.name}</td>
                <td>{mockPromocao.totalPrice}</td>
                <td>{mockPromocao.startDate}</td>
                <td>{mockPromocao.endDate}</td>
                <td>
                  <img 
                    src="/assets/icons/visualizar.svg" 
                    alt="Visualizar" 
                    onClick={() => onSelectPromocao(mockPromocao)} 
                    className={style.content__table__body_click} 
                  />
                  <img 
                    src="/assets/icons/enviar.svg" 
                    alt="Enviar" 
                    className={style.content__table__body_click} 
                  />
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
              <tr>
                <td data-label={table1}>{mockPromocao.name}</td>
                <td data-label={table2}>{mockPromocao.totalPrice}</td>
                <td data-label={table3}>{mockPromocao.startDate}</td>
                <td data-label={table4}>{mockPromocao.endDate}</td>
                <td className={style.content__table__buttonTabela}>
                  <div className={style.content__table__button}>
                    <h1>Visualizar</h1>
                    <Image 
                      className={style.content__table__button_img} 
                      src="/assets/iconOlhoBranco.png" 
                      onClick={() => onSelectPromocao(mockPromocao)} 
                      alt="Visualizar" 
                      width={27} 
                      height={26} 
                    />
                  </div>
                </td>
              </tr>
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
