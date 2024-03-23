import { Form } from "shared/ui/form";
import styles from './SignUpForm.module.css';
import { FormInput } from "features/form-input";
import { Button } from "shared/ui/button";
import { passwordPattern } from "shared/regex";
import { InputRequirement } from "shared/types";
import { digitsRegex, lowerLettersRegex, minLengthRegex, symbolsRegex, upperLettersRegex } from "shared/regex/regex";

const passowrdRequirements: InputRequirement[] = [
    {
        regex: minLengthRegex,
        description: 'Минимальная длина 8 символов'
    },
    {
        regex: digitsRegex,
        description: 'Пароль должен содержать как минимум 1 цифру'
    },
    {
        regex: upperLettersRegex,
        description: 'Пароль должен содержать как минимум 1 прописную букву'
    },
    {
        regex: lowerLettersRegex,
        description: 'Пароль должен содержать как минимум 1 строчную букву'
    },
    {
        regex: symbolsRegex,
        description: 'Пароль должен содержать как минимум 1 из следующих символов !#$%&?_'
    },
]

export const SignUpForm = () => {
    return (
        <section className={styles.form}>
            <h1 className={styles.formTitle}>Регистрация</h1>
                <Form>
                    <FormInput 
                        id="name"
                        autoComplete="name"
                        name="name"
                        placeholder="Пушкин александр Сергеевич"
                        required
                    >
                        ФИО
                    </FormInput>

                    <FormInput 
                        id="email"
                        autoComplete="email"
                        name="email"
                        placeholder="pushlin@yandex.ru"
                        required
                    >
                        Электронная почта
                    </FormInput>

                    <FormInput 
                        id="password"
                        autoComplete="new-password"
                        name="new-password"
                        type="password"
                        pattern={passwordPattern}
                        required
                        requirements={passowrdRequirements}
                    >
                        Пароль
                    </FormInput>
                    <Button className={styles.button}>Зарегистрироваться</Button>
                </Form>
        </section>
    );
}