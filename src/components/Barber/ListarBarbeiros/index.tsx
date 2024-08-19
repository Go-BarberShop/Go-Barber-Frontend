import { useEffect, useState } from "react";
import style from "./ListarBarbeiros.module.scss";
import { useMutation } from "react-query";
import Link from "next/link";
import Image from "next/image";
import BarbeiroTable from "./BarbeiroTable/index";
import { getAllBarbers } from "@/api/barbeiro/getAllBarbers";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import BarberInfo from "../BarberInfo/BarberInfo";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";

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
  salario: 0;
  dataAdmissao: string;
  tipoServico: string;
  cargaHoraria: number;
}

const BarbeiroComponent = () => {
  const [barbeiros, setBarbeiros] = useState<Barbeiro[]>([]);
  const [selectedBarbeiro, setSelectedBarbeiro] = useState<Barbeiro | null>(
    null
  );
  const [searchTerm] = useState("");
  const { push } = useRouter();

  const { mutate } = useMutation(getAllBarbers, {
    onSuccess: (res) => {
      setBarbeiros(res.data);
    },
    onError: (error) => {
      console.error("Erro ao recuperar os barbeiros:", error);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  const filteredBarbeiros = barbeiros.filter((barbeiro) =>
    barbeiro.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectBarbeiro = (barbeiro: Barbeiro) => {
    setSelectedBarbeiro(barbeiro);
  };

  const handleBackToList = () => {
    setSelectedBarbeiro(null);
  };

  if (selectedBarbeiro) {
    return (
      <BarberInfo
        diretorioAtual="dirAtual"
        hrefAnterior={APP_ROUTES.private.home.name}
        hrefAtual={APP_ROUTES.private.barbeiros.name}
        backDetalhamento={handleBackToList}
        dirAnt="dirAnt"
        barbeiro={selectedBarbeiro}
      />
    );
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
          <div className={style.dropdown}>
            <div className={style.botaoDropdown}>
              <Image
                onClick={() => setOpen(!open)}
                src="/assets/dropdown.svg"
                alt="Dropdown"
                width={27}
                height={24}
              />
            </div>
            {open && (
              <div className={style.dropdown}>
                <ul className={style.botaoDropdown__lista}>
                  <li>
                    <div className={style.botaoDropdown__button}>
                      <img src="/assets/navalha.svg" alt="Adicionar Barbeiro" />
                      <Link
                        className={style.header__container_link}
                        href="/barbeiros/novoBarbeiro"
                      >
                        <h1>Adicionar Barbeiro</h1>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={style.header__container_botoes}>
            <button
              onClick={() => push(APP_ROUTES.private.barbeiros_cadastro.name)}
            >
              <h1>Adicionar Barbeiro</h1>
              <img src="/assets/icons/navalha.svg" alt="Navalha" />
            </button>
          </div>
        </div>
      </div>
      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <BarbeiroTable
        listBarbeiros={filteredBarbeiros}
        setBarbeiros={setBarbeiros}
        onSelectBarbeiro={handleSelectBarbeiro}
      />
    </div>
  );
};

export default BarbeiroComponent;
