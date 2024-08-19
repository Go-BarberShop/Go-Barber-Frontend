"use client";

import style from "./produto.module.scss";
import Menu from "@/components/Menu";
import NovoEstoque from "@/components/Produto/NovoEstoque";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <NovoEstoque />
            </div>
        </div>
    </>
  );
}
