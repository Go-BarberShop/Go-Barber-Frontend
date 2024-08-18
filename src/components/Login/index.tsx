import { useState } from "react";
import style from "./login.module.scss";

import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import { setStorageItem } from "@/utils/localStore";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { push } = useRouter();

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

    const getEnter = (e: any) => {
        if (e.key === "Enter") {
            //mutate();
            push(APP_ROUTES.private.home.name);
            //dispatch(setUserLogin(login));
            setStorageItem("userlogin", login);

        }
    }

    return (
        <div className={style.login}>
            <div className={style.login__content}>
                <img className={style.login__logo}src="/assets/logo.svg" alt="logo" />
                <div className={style.login__title}>
                    <h2 className={style.title}>Faça seu login</h2>
                </div>
                
                
                <div className={style.login__form}>
                    <div className={style.login__form_input}>
                    <label htmlFor="email" className={style.login__content__label}>
                        <input type="email" name="email" placeholder="Enter your best e-mail" onChange={(e) => setLogin(e.target.value)} value={login} />
                    </label>
                    <label htmlFor="password" className={style.login__content__label}>
                        <input type="password" name="password" placeholder="Enter a strong password" onChange={(e) => setPassword(e.target.value)} value={password} onKeyUp={getEnter} />
                    </label>
                    </div>
                    {/*status === "error" ? <p className={style.login__content_errorLogin}>Erro no login...</p> : false* ${status === "loading" || status === "success" ? style.active : ""}*/}
                        <button className={`${style.login__content__button_login} `} onClick={() => push(APP_ROUTES.private.home.name) /*mutate()*/}>Entrar</button>
                    
                </div>
            </div>
           <div className={style.login__image}>
           <img src="" alt="" />
           </div>
        </div>
    )
}

export default Login;