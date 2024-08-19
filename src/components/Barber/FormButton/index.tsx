import React from 'react'
import styles from './formButton.module.scss'
interface FormButtonProps{
  children: React.ReactNode,
  type: "cancel" | "submit",
  onClick?: () => void;
}


const FormButton: React.FC<FormButtonProps> = ({children, type, onClick}) => {

  const buttonClassName = `${styles[type]} ${styles.btn}`

  return (
    <div>
        <button className={buttonClassName} type = {type == "submit" ? "submit" : "button"} onClick={onClick}>
          {children}
        </button>
    </div>
  )
}

export default FormButton