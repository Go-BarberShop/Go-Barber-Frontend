"use client";

import CadastroServico from "@/components/Servicos/CadastrarServico";
import style from "./servico.module.scss";
import Menu from "@/components/Menu";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <CadastroServico />
            </div>
        </div>
    </>
  );
}
