"use client";

import style from "./promocao.module.scss";
import Menu from "@/components/Menu";
import Home from "@/components/Home";
import Promocao from "@/components/Promocao/ListaPromocao";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <Promocao />
            </div>
        </div>
    </>
  );
}
