"use client";

import React, { useEffect, useState } from "react";
import styles from "./barbeiros.module.scss";
import Menu from "@/components/Menu";
import MeuPerfil from "@/components/Secretaria/MeuPerfil";
import { getBarberLogged } from "@/api/barbeiro/getBarberLogged";
import { useMutation } from "react-query";
import { APP_ROUTES } from "@/constants/app-routes";
import { Secretaria } from "@/interfaces/secretariaInterface";
import { getSecretariaLogged } from "@/api/secretaria/getSecretariaLogged";

const page = () => {
  const [secretaria, setSecretaria] = useState<Secretaria>();

  
    useEffect(() => {
      if(!secretaria){
          mutate()
      }
    }, [secretaria]);

    const { mutate } = useMutation(() => getSecretariaLogged(), {
      onSuccess: (res) => {
        setSecretaria(res.data);
      },
      onError: (error) => {
        console.error('Erro ao recuperar as promoções:', error);
      }
    });
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__menu}>
          <Menu />
        </div>
        <div className={styles.container__main}>
          <MeuPerfil
              secretaria={secretaria}
              hrefAnterior={APP_ROUTES.private.home.name}
          
          />
        </div>
      </div>
    </div>
  );
};

export default page;
