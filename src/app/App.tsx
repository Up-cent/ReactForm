import { SignUpForm } from "widgets/sign-up-form"
import styles from './App.module.css';

function App() {

    return (
        <main className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <SignUpForm />
        </main>
    )
}

export default App
