import { FC, FormEventHandler, InputHTMLAttributes, useState } from "react";
import { Input } from "shared/ui/input";
import styles from './FormInput.module.css';
import { ShowHideCheckbox } from "features/show-hide-checkbox";
import { InputRequirement } from "shared/types";
import { getRequirementsStatus } from "shared/lib";
import { InputDescription } from "shared/ui/input-description";

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
    requirements?: InputRequirement[]
}

export const FormInput:FC<IFormInput> = ({
    id, 
    name, 
    placeholder,
    autoComplete,
    children,
    type='text',
    minLength,
    maxLength,
    pattern,
    required=false,
    requirements=[]
}) => {
    const [isHidePassword, setIsHidePassword] = useState(true);
    const [requirementsStatus, setRequirementsStatus] = useState(getRequirementsStatus(requirements));
    const [value, setValue] = useState("");

    const passwordViewToggle:FormEventHandler<HTMLInputElement> = (event) => {
        setIsHidePassword(!event.currentTarget.checked)
    }

    const onInput:FormEventHandler<HTMLInputElement> = (e) => {
        const newValue = e.currentTarget.value;

        setValue(newValue);

        const updatedReq = requirementsStatus.map(req => ({...req, isAchieved: req.regex.test(newValue)}))
        setRequirementsStatus(updatedReq);
    }

    return(
        <section className={styles.container}>
            <label className={styles.label} htmlFor={id}>{children}</label>
            <section className={styles.inputSection}>
                <Input 
                    id={id} 
                    name={name} 
                    type={type === 'password' && !isHidePassword ? 'text' : type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    minLength={minLength}
                    maxLength={maxLength}
                    required={required}
                    pattern={pattern}
                    value={value}
                    onInput={onInput}
                    className={styles.input}
                />
                { 
                    type === 'password' && 
                    <ShowHideCheckbox 
                        className={styles.showHideCheckbox} 
                        onInput={passwordViewToggle} 
                        id='show-hide-password'
                    /> 
                }
            </section>
            
            {
                requirementsStatus.length > 0 && 
                <InputDescription 
                    className={styles.descriptionContainer} 
                    requirementsStatus={requirementsStatus}
                />
            }
        </section>
    );
}   