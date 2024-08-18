import { useEffect, useState } from "react";
import style from "./promocao.module.scss";
import { useMutation } from "react-query";
import Link from "next/link";
import Image from "next/image";
import Table from "./Table";
import { getAllPromocoes } from "@/api/promocoes/getAllPromocoes";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import DetalhamentoPromocao from "../DetalharPromocao";
import HeaderDetalhamento from "@/components/Header/HeaderDetalhamento";

interface Promocao {
  id: string;
  name: string;
  totalPrice: string;
  startDate: string;
  endDate: string;
  coupon: string;
}

const PromocaoComponent = () => {
  const [promocoes, setPromocoes] = useState<Promocao[]>([]);
  const [selectedPromocao, setSelectedPromocao] = useState<Promocao | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const { push } = useRouter();


  const { mutate } = useMutation(getAllPromocoes, {
    onSuccess: (res) => {
      setPromocoes(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as promoções:', error);
    }
  });

  useEffect(() => {
    mutate();
  }, []);

  const filteredPromocoes = promocoes.filter((promocao) =>
    promocao.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectPromocao = (promocao: Promocao) => {
    setSelectedPromocao(promocao);
  };

  const handleBackToList = () => {
    setSelectedPromocao(null);
  };

  if (selectedPromocao) {

    return <DetalhamentoPromocao
      diretorioAtual="dirAtual"
      promocao={selectedPromocao}
      backDetalhamento={handleBackToList}
      dirAnt="dirAnt"
      hrefAnterior={APP_ROUTES.private.home.name}
      hrefAtual={APP_ROUTES.private.promocoes.name}
    />
  }

  return (
    <div>
      <div className={style.header}>
      <HeaderDetalhamento
            titulo="Promoções"
            hrefAnterior={APP_ROUTES.private.home.name}
            diretorioAnterior="Home /"
            diretorioAtual="Promoções"

       />
        
        
        <div className={style.header__container}>
          <div className={style.dropdown}>
            <div className={style.botaoDropdown}>
              <Image onClick={() => setOpen(!open)}
                src="/assets/dropdown.svg" alt="Dropdown" width={27} height={24} />
            </div>
            {open && (
              <div className={style.dropdown}>
                <ul className={style.botaoDropdown__lista}>
                  <li>
                    <div className={style.botaoDropdown__button}>
                      <img src="/assets/navalha.svg" alt="Adicionar Promoção" />
                      <Link className={style.header__container_link} href="/promocoes/novaPromocao">
                        <h1>
                          Adicionar Promoção
                        </h1>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={style.header__container_botoes}>
            <button onClick={() => (push(APP_ROUTES.private.cadastrar_promocao.name))}>
              
              <h1>
                Adicionar Promoção
              </h1>
              <img src="/assets/icons/navalha.svg" alt="Navalha" />

            </button>
          </div>
        </div>
      </div>

      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

      <Table
        listPromocoes={filteredPromocoes}
        setPromocoes={setPromocoes}
        onSelectPromocao={handleSelectPromocao}
        table1="Nome"
        table2="Valor"
        table3="Data Inicio"
        table4="Data Fim"
        table5="Ações"
      />
    </div>
  );
};

export default PromocaoComponent;
