import { useState } from "react";
//import BackgroundDropdown from "../BackgroundDropdown";
import style from "./home.module.scss";
import { useMutation } from "react-query";
import api from "@/api/http-common";
//import { postLogin } from "@/api/login/postLogin";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import { setStorageItem } from "@/utils/localStore";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '@/redux/store'
import { setUserLogin } from "@/redux/userLogin/userLoginSlice";
import Image from "next/image";
import Header_menu from "../Header_menu";
import Botao_menu from "../Botao_menu";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

   // const userLogin: string = useSelector((state: RootState) => state.userLogin);
   // const dispatch = useDispatch();

    // const { status, mutate } = useMutation(
    //     async () => {
    //         return postLogin(login, password);
    //     },
    //     {
    //         onSuccess: (res) => {
    //             api.defaults.headers.authorization = `Bearer ${res.data.access_token}`;
    //             setStorageItem("token", res.data.access_token)
    //             push(APP_ROUTES.private.home.name);
    //             dispatch(setUserLogin(login));
    //             setStorageItem("userlogin", login);
    //         },

    //         onError: (erro) => {
    //             console.error(erro);
    //         }
    //     }
    // )

 

    return (
        <div className={style.container}>
            <div className={style.container__menu}>
                <Header_menu />
                <Botao_menu 
                title="Gerenciamento Barbeiro" 
                icon="/assets/icons/navalha.svg"
                route={APP_ROUTES.private.gerencia_barbeiro.name}
                />
                <Botao_menu 
                title="Gerenciamento Serviço" 
                icon="/assets/icons/cadeira.svg"
                route={APP_ROUTES.private.gerencia_servico.name}
                />
                <Botao_menu 
                title="Gerenciamento Produtos" 
                icon="/assets/icons/sexta.svg"
                route={APP_ROUTES.private.gerencia_produto.name}
                />
                <Botao_menu 
                title="Gerenciamento Promoções" 
                icon="/assets/icons/promocao.svg"
                route={APP_ROUTES.private.gerencia_promocao.name}
                />
            </div>
           <div className={style.container__main}>
                
           </div>
        </div>
    )
}

export default Login;