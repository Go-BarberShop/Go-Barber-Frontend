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
import Menu from "../Menu";

const Home = () => {

    return (
        <div className={style.container}>
            <Menu />
           <div className={style.container__main}>
                
           </div>
        </div>
    )
}

export default Home;