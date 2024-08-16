"use client";

import style from "./home.module.scss";
import Menu from "@/components/Menu";
import Home from "@/components/Home";

export default function page() {
  return (
    <>
        <div className={style.container}>
            <div className={style.container__menu}>
                <Menu />
            </div>
            <div className={style.container__main}>
                <Home />
            </div>
        </div>
    </>
  );
}
