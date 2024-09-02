import { useEffect, useState } from "react";
import style from "./listarAgendamentos.module.scss"
import { useMutation } from "react-query";
import AgendamentoTable from "../Table";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";
import { getAllBarbers } from "@/api/barbeiro/getAllBarbers";
import DetalharAgendamento from "../DetalharAgendamento";
import { Agendamento } from "@/interfaces/agendamentoInterface";
import { getAllAtendimentos } from "@/api/atendimentos/getAllAtendimentos";

const ListarAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [selectedAgendamento, setSelectedAgendamento] = useState<Agendamento | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { push } = useRouter();

  const { mutate } = useMutation(() => getAllAtendimentos(currentPage, 3), {
    onSuccess: (res) => {
      setAgendamentos(res.data.content);
      setTotalPages(res.data.totalPages);
    },
    onError: (error) => {
      console.error('Erro ao recuperar os atendimentos:', error);
    }
  });

  useEffect(() => {
    mutate();
  }, [currentPage]);

  const filteredAgendamentos = agendamentos.filter((agendamento) =>
    agendamento?.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAgendamento = (agendamento: Agendamento) => {
    setSelectedAgendamento(agendamento);
  };

  const handleBackToList = () => {
    setSelectedAgendamento(null);
  };

  if(selectedAgendamento){
    return(
      <DetalharAgendamento
      hrefAtual={barbeiro.name}
      backDetalhamento={handleBackToList}
      agendamento={selectedAgendamento}
    />
    )
  }

  return (
    <div>
      <div className={style.header}>
        <HeaderDetalhamento
          titulo="Barbeiros"
          hrefAnterior={APP_ROUTES.private.home.name}
          diretorioAnterior="Home /"
          diretorioAtual="Barbeiros"
        />
        <div className={style.header__container}>
         <div className={style.header__container_botoes}>
            <button onClick={() => (push(APP_ROUTES.private.cadastrar_barbeiro.name))}>
              <h1>
                Adicionar Barbeiro
              </h1>
              <img src="/assets/icons/navalha.svg" alt="Navalha" />
            </button>
          </div>
        </div>
      </div>

      <AgendamentoTable
        listAgendamentos={filteredAgendamentos}
        setAgendamentos={setAgendamentos}
        onSelectAgendamento={handleSelectAgendamento}
        table1="Nome"
        table2="Contato"
        table3="Ações"
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ListarAgendamentos;