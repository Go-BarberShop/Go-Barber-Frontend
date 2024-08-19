"use client";

import style from "./page.module.scss";
import Menu from "@/components/Menu";
import BarbeiroComponent from "@/components/Barber/ListarBarbeiros";

export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.container__menu}>
        <Menu />
      </div>
      <div className={style.container__main}>
        <BarbeiroComponent />
      </div>
    </div>
  );
}
