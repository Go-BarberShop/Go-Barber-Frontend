"use client";

import style from "./page.module.scss";
import Menu from "@/components/Menu";
import ListaBarbeiros from "@/components/Barbeiro/ListaBarbeiro";

export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.container__menu}>
        <Menu />
      </div>
      <div className={style.container__main}>
        <ListaBarbeiros />
      </div>
    </div>
  );
}
