import { ChangeEventHandler } from "react";
import styles from "./Input.module.css"

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ value, onChange }: IProps) => {
  return <input className={styles.input} value={value} onChange={onChange} />;
};