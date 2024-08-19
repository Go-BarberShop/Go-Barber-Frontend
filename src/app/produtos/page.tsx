"use client";

import style from "./produtos.module.scss";
import Menu from "@/components/Menu";
import Produtos from "@/components/Produto/ListaProduto";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <Produtos />
            </div>
        </div>
    </>
  );
}
