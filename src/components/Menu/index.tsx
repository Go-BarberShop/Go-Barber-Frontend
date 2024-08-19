import style from "./menu.module.scss";
import { APP_ROUTES } from "@/constants/app-routes";
import Header_menu from "./Header_menu";
import Botao_menu from "./Botao_menu";
import Footer_menu from "./Footer_menu";

const Menu = () => {


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

export default Menu;