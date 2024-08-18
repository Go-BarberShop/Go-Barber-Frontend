import React from 'react';
import styles from './selectBarber.module.scss';

interface OptionArray {
  id: number;
  name: string;
}

interface SelectBarberProps {
  optionArray: OptionArray[];
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBarber: React.FC<SelectBarberProps> = ({ optionArray, label, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>Select {label}</option>
        {optionArray.map((option) => (
          <option key={option.id} className={styles.option} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBarber;
