"use client";

import style from "./agendamento.module.scss";
import Menu from "@/components/Menu";
import Dashboard from "@/components/Dashboard";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <Dashboard />
            </div>
        </div>
    </>
  );
}
