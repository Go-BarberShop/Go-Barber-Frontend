import React from 'react'
import styles from './barberInput.module.scss'

interface BarberInputInterfaceProps{
    type: string;
    label: string;
    size?: 'small' | 'medium' | 'large'
}

const BarberInput:React.FC<BarberInputInterfaceProps> = ({type, label, size = 'medium'}) => {

  const inputClassName = `${styles[type]} ${styles[size]}`;

  return (
    <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <input className={inputClassName} type={type}/>
    </div>
  )
}

export default BarberInput