import React from 'react'
import styles from './selectBarber.module.scss'

interface OptionArray{
    id: number,
    name: string,
}

interface SelectBarberProps{
    optionArray: OptionArray[],
    label: string;
}

const SelectBarber: React.FC<SelectBarberProps> = ({optionArray, label}) => {
    console.log(optionArray);
  return (
    <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <select className={styles.select}>
            {optionArray.map((option) => (
                <option key={option.id} className={styles.option} value={option.name}>{option.name}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectBarber