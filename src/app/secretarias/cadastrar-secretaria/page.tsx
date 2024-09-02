"use client";

import React from "react";
import styles from "./secretaria.module.scss";
import Menu from "@/components/Menu";
import CadastrarSecretaria from "@/components/Secretaria/CadastrarSecretaria";

const page = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__menu}>
          <Menu />
        </div>
        <div className={styles.container__main}>
          <CadastrarSecretaria />
        </div>
      </div>
    </div>
  );
};

export default page;
