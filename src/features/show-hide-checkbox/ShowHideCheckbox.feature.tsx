import { FC, InputHTMLAttributes } from "react";
import styles from './ShowHideCheckbox.module.css';

export const ShowHideCheckbox:FC<InputHTMLAttributes<HTMLInputElement>> = ({id, onInput, className}) => {
    return (
        <div className={className}>
            <input onInput={onInput} type="checkbox" id={id} className={styles.showPasswordCheckbox} />
            <label className={styles.showPasswordLabel} htmlFor={id}></label>
        </div>
    );
}