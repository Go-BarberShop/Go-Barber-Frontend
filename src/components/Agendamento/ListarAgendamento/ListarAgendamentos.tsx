import { useEffect, useState } from "react";
import style from "./listarAgendamentos.module.scss";
import { useMutation } from "react-query";
import AgendamentoTable from "../Table";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";
import DetalharAgendamento from "../DetalharAgendamento";
import { Agendamento } from "@/interfaces/agendamentoInterface";
import { getAllAtendimentos } from "@/api/atendimentos/getAllAtendimentos";
import { getHistoricoAtendimentos } from "@/api/atendimentos/getHistoricoAtendimentos";

const ListarAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [selectedAgendamento, setSelectedAgendamento] =
    useState<Agendamento | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { push } = useRouter();

  const { mutate } = useMutation(() => getHistoricoAtendimentos(currentPage, 3), {
    onSuccess: (res) => {
      setAgendamentos(res.data.content);
      setTotalPages(res.data.totalPages);
    },
    onError: (error) => {
      console.error("Erro ao recuperar os agendamentos:", error);
    },
  });

  useEffect(() => {
    mutate();
  }, [currentPage]);

  const onSelectAgendamento = (agendamento: Agendamento) => {
    setSelectedAgendamento(agendamento);
  };

  const handleSelectAgendamento = () => {
    setSelectedAgendamento(null);
  };

  if (selectedAgendamento) {
    return (
      <DetalharAgendamento
        hrefAnterior={APP_ROUTES.private.home.name}
        backDetalhamento={handleSelectAgendamento}
        agendamento={selectedAgendamento}
      />
    );
  }

  return (
    <div className={style.box}>
      <div className={style.container}>
        <div className={style.header}>
          <HeaderDetalhamento
            titulo="Agendamentos"
            hrefAnterior={APP_ROUTES.private.home.name}
            diretorioAnterior="Home /"
            diretorioAtual="Agendamentos"
          />
        </div>

        <AgendamentoTable
          listAgendamentos={agendamentos}
          setAgendamentos={setAgendamentos}
          onSelectAgendamento={onSelectAgendamento}
          table1="Nome"
          table2="Contato"
          table3="Ações"
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ListarAgendamentos;
