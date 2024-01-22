import MediaContainer from "@/components/MediaContainer/MediaContainer";
import BarcodeContainer from "@/components/BarcodeContainer/BarcodeContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MediaContainer />
      <BarcodeContainer />
    </main>
  );
}
