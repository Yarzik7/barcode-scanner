import App from "@/components/App/App";
import AppTest from "@/components/AppTest/AppTest";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <App /> */}
      <AppTest />
    </main>
  );
}
