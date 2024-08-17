"use client";

import CadastroPromocao from "@/components/Promocao/CadastrarPromocao";
import style from "./promocao.module.scss";
import Menu from "@/components/Menu";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <CadastroPromocao />
            </div>
        </div>
    </>
  );
}
