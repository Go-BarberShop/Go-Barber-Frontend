import React from 'react';
import styles from './barberInput.module.scss';

interface BarberInputProps {
  type: string;
  label: string;
  size?: 'small' | 'medium' | 'large';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  error?: string | false;
}

const BarberInput: React.FC<BarberInputProps> = ({
  type,
  label,
  size = 'medium',
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const inputClassName = `${styles[type]} ${styles[size]} ${error ? styles.error : ''}`;

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={inputClassName}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default BarberInput;
