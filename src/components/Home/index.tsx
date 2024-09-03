import { useState } from "react";
import style from "./home.module.scss";
import { getStorageItem } from "@/utils/localStore";

export default function Home () {
    const [role, setRole] = useState<string | null>(getStorageItem("userRole"));
    
    function whatIsTypeUser() {
        if (role === "ADMIN") {
            return <LayoutAdmin />
        } else if (role === "BARBER") {
            return <LayoutBarbeiro />
        } else if (role === "SECRETARY") {
             return <LayoutSecretaria/>
        }
    } 

    return (
        whatIsTypeUser()  
    )
}

const LayoutAdmin = () => {
    return (
      <>
        <div className={style.main}/>
      </>
    )
}

const LayoutSecretaria = () => {
    return (
      <>
        <div className={style.main}/>
      </>
    )
}

const LayoutBarbeiro = () => {
    return (
      <>
        <div className={style.main}/>
      </>
    )
}
