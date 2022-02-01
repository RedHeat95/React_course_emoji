import { ChangeEvent, KeyboardEvent } from "react";
import styles from "./Form.module.css";
import { Input } from "../Input/Input";

interface IProps {
    text: string;
    setText: (value: string) => void;
    addNewTodoKey: () => void;
}

export const Form = ({ text, setText, addNewTodoKey }: IProps) => {
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }  

    // const addTodoKey = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if(e.key === "Enter") {
    //         addNewTodoKey();
    //     }
    // }

    return (
        <div className={styles.form}>
            <Input
                value={text}
                onChange={onChange}
                              
            />
        </div>
    );
};