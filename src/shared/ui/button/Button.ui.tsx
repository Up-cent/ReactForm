import { ButtonHTMLAttributes, FC } from "react";
import styles from './Button.module.css';
import { classNames } from "shared/lib";

export const Button:FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...props}) => {
    return (
        <button {...props} className={classNames(styles.button, className)}>
            {children}
        </button>
    );
}