import { ChangeEvent } from "react";
import styles from "./Form.module.css";
import { Input } from "../Input/Input";

interface IProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Form = ({ search, setSearch }: IProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.form}>
      <Input value={search} onChange={onChange} />
    </div>
  );
};
