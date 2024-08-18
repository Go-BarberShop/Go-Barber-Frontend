import React from 'react'
import styles from './formButton.module.scss'
interface FormButtonProps{
  children: React.ReactNode,
  type: "cancel" | "submit",
}


const FormButton: React.FC<FormButtonProps> = ({children, type}) => {

  const buttonClassName = `${styles[type]} ${styles.btn}`

  return (
    <div>
        <button className={buttonClassName} type='submit'>
          {children}
        </button>
    </div>
  )
}

export default FormButton