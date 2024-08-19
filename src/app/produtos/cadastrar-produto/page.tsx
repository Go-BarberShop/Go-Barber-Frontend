"use client";

import CadastrarProduto from "@/components/Produto/CadastrarProduto";
import style from "./produto.module.scss";
import Menu from "@/components/Menu";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <CadastrarProduto />
            </div>
        </div>
    </>
  );
}
