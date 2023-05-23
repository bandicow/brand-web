import styles from "./page.module.scss";
import MainPage from "@/app/MainPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}
