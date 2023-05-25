import styles from "./page.module.scss";
import MainPage from "@/MainPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
      <div></div>
    </main>
  );
}
