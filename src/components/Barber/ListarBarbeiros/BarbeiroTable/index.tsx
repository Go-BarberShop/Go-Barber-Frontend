"use client";

import Image from "next/image";
import style from "./barbeiroTable.module.scss";

interface TableProps {
  table1: string;
  table2: string;
  table3: string;
  table4: string;
  listBarbeiros: Barbeiro[];
  setBarbeiros: (barbeiro: Barbeiro[]) => void;
  onSelectBarbeiros: (barbeiro: Barbeiro) => void;
}

interface Barbeiro {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  cep: string;
  cpf: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  salario: number;
  dataAdmissao: string;
  tipoServico: string;
  cargaHoraria: number;
}

const barbeiroMock: Barbeiro[] = [
  {
    id: '1',
    nome: 'João Silva',
    telefone: '1234-5678',
    email: 'joao.silva@example.com',
    cep: '12345-678',
    cpf: '123.456.789-00',
    rua: 'Rua A',
    numero: 123,
    complemento: 'Apto 101',
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP',
    salario: 3000,
    dataAdmissao: '2023-01-01',
    tipoServico: 'Corte',
    cargaHoraria: 40,
  },
  {
    id: '2',
    nome: 'Maria Oliveira',
    telefone: '9876-5432',
    email: 'maria.oliveira@example.com',
    cep: '23456-789',
    cpf: '234.567.890-11',
    rua: 'Rua B',
    numero: 456,
    complemento: 'Casa 2',
    bairro: 'Jardim',
    cidade: 'Campinas',
    estado: 'SP',
    salario: 3200,
    dataAdmissao: '2022-12-15',
    tipoServico: 'Barba',
    cargaHoraria: 35,
  },
];

const BarbeiroTable: React.FC<TableProps> = ({ 
  table1,
  table2,
  table3,
  listBarbeiros, 
  onSelectBarbeiros,
  setBarbeiros,
}) => {
  return (
    <>
      <div className={style.content}>
        <table className={style.content__table}>
          <thead className={style.content__table__header}>
            <tr>
              <th>{table1}</th>
              <th>{table2}</th>
              <th className={style.content__table__header_name3}>
                <div>
                  {table3}
                  <img src="/assets/icons/informacao.svg" alt="Visualizar" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className={style.content__table__body}>
            {barbeiroMock.map((barbeiro, index) => (
              <tr key={index}>
                <td>{barbeiro.nome}</td>
                <td>{barbeiro.telefone}</td>
                <td>
                  <button 
                    onClick={() => onSelectBarbeiros(barbeiro)} 
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
            {listBarbeiros.map((barbeiro, index) => (
              <tr key={index}>
                <td>{barbeiro.nome}</td>
                <td>{barbeiro.telefone}</td>
                <td>
                  <button 
                    onClick={() => onSelectBarbeiros(barbeiro)} 
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
      </div>
    </>
  );
};

export default BarbeiroTable;
