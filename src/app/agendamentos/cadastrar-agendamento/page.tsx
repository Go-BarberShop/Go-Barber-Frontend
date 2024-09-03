"use client";

import CadastroAgendamento from "@/components/Dashboard/NovoAgendamento";
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
                <CadastroAgendamento />
            </div>
        </div>
    </>
  );
}
