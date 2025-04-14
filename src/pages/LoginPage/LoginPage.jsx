import styles from './LoginPage.module.css'
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Farmer Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
