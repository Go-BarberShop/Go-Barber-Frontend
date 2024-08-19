// Importação do modal
import ConfirmationModal from "../BotaoConfirmar";
import style from "./table.module.scss";
import React, { useState } from 'react';
import { postNotificarPromocao } from "@/api/promocoes/postNotificarPromocao";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPromocao, setSelectedPromocao] = useState<Promocao | null>(null);

  const handleClose = () => {
    setIsModalOpen(false);
};

  const handleOpenModal = (promocao: Promocao) => {
    setSelectedPromocao(promocao);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    if (selectedPromocao) {
      try {
        // Enviar a promoção usando a função postNotificarPromocao
        const response = await postNotificarPromocao(selectedPromocao.id);
  
        if (response.status === 202) {
          console.log(`Promoção enviada com sucesso: ${selectedPromocao.name}`);
        } else {
          console.error('Falha ao enviar a promoção. Status:', response.status);
          console.error('Detalhes da resposta:', response.data);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }
  
    setIsModalOpen(false);
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
                  <button 
                    onClick={() => onSelectPromocao(promocao)} 
                    className={style.content__table__body_click}
                  >
                    <img 
                      src="/assets/icons/visualizar.svg" 
                      alt="Visualizar" 
                    />
                  </button>
                  <button 
                    onClick={() => handleOpenModal(promocao)} 
                    className={style.content__table__body_click}
                  >
                    <img 
                      src="/assets/icons/enviar.svg" 
                      alt="Enviar" 
                    />
                  </button>
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
      {selectedPromocao && (
        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={handleClose}
          onConfirm={handleConfirm}
          promocaoName={selectedPromocao.name}
        />
      )}
    </>
  );
};

export default Table;
