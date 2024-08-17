
import { APP_ROUTES } from "@/constants/app-routes";
import style from "./header_menu.module.scss";
import { useRouter } from "next/navigation";

interface HeaderMenuProps {
    name: string;
    photo: string;
}
const Header_menu : React.FC<HeaderMenuProps> = ({ name, photo  }) => {
    const { push } = useRouter();

    return (
        <>
            <header className={style.header_menu}>
                
                <div className={style.header_menu__circle}>
                    <div className={style.header_menu__circle_img}>
                        <img src={photo} alt={name} />
                    </div>
                </div>
                <div className={style.header_menu__content}>
                    <div className={style.header_menu__content__title}>
                        <h1>Bem vindo,</h1>
                        <span>{name}</span>
                    </div>
                    <button className={style.header_menu__content__button}
                    onClick={() => (push(APP_ROUTES.public.login))}>
                    <span>Sair</span> 
                    <div className={style.header_menu__content__button_icon}></div>
                </button>

                </div>
            </header>
            <div className={style.header_menu_line}/>
                        
            
        </>
    )
}

export default Header_menu;