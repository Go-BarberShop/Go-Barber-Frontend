import style from "./menu.module.scss";
import { APP_ROUTES } from "@/constants/app-routes";
import Header_menu from "./Header_menu";
import Botao_menu from "./Botao_menu";
import Footer_menu from "./Footer_menu";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";  // Import the correct type

const Menu = () => {

    const [role, setRole] = useState<string | null>(getStorageItem("userRole"));
    
    const userLogin = useSelector((state: RootState) => state.userLogin);
    console.log(role)
    function whatIsTypeUser() {
        if (role === "ADMIN") {
            return <LayoutAdmin />
        } else if (role === "BARBER") {
            return <LayoutBarbeiro />
        } else if (role === "ROLE_AGRICULTOR") {
             return <LayoutSecretaria/>
        }
    } 

    return (
        whatIsTypeUser()  
    )
    
}

export default Menu;

const LayoutAdmin = () => {
    return (
        <div className={style.menu}>
            <div className={style.menu__container}>
                
                <div>
                    <Header_menu photo="/assets/photo.svg" name="Adenilson Ramos" />
                </div>
                <div>
                    <Botao_menu 
                        title="Gerenciamento Barbeiro" 
                        icon="/assets/icons/navalha.svg"
                        route={APP_ROUTES.private.barbeiros.name}
                    />
                    <Botao_menu 
                        title="Gerenciamento Serviços" 
                        icon="/assets/icons/cadeira.svg"
                        route={APP_ROUTES.private.servicos.name}
                    />
                    <Botao_menu 
                        title="Gerenciamento Produtos" 
                        icon="/assets/icons/sexta.svg"
                        route={APP_ROUTES.private.produtos.name}
                    />
                        <Botao_menu 
                        title="Gerenciamento Promoções" 
                        icon="/assets/icons/promocao.svg"
                        route={APP_ROUTES.private.promocoes.name}
                    />
                </div>
                <div>
                    <Footer_menu />
                </div>
            </div>
            
        </div>
    )
}

const LayoutSecretaria = () => {
    return (
        <div className={style.menu}>
        <div className={style.menu__container}>
            
            <div>
                <Header_menu photo="/assets/photo.svg" name="Adenilson Ramos" />
            </div>
            <div>
                <Botao_menu 
                    title="Meu Perfil" 
                    icon="/assets/icons/navalha.svg"
                    route={APP_ROUTES.private.barbeiros.name}
                />
                
            </div>
            <div>
                <Footer_menu />
            </div>
        </div>
        
    </div>
)
}

const LayoutBarbeiro = () => {
    return (
        <div className={style.menu}>
            <div className={style.menu__container}>
                
                <div>
                    <Header_menu photo="/assets/photo.svg" name="Adenilson Ramos" />
                </div>
                <div>
                    <Botao_menu 
                        title="Meu Perfil" 
                        icon="/assets/icons/navalha.svg"
                        route={APP_ROUTES.private.barbeiros.name}
                    />
                    
                </div>
                <div>
                    <Footer_menu />
                </div>
            </div>
            
        </div>
    )
}