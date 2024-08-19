"use client";

import style from "./servico.module.scss";
import Menu from "@/components/Menu";
import ServicoComponent from "@/components/Servicos/ListaServico";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <ServicoComponent />
            </div>
        </div>
    </>
  );
}
