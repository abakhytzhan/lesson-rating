import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./number.module.css";
import { useRouter } from "next/router";
import online from "./Online.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { number } = router.query;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.section}>
          <Image src={online} alt="online" width={157} height={101} />
          <div className={styles.select}>You selected {number} out of 5</div>
          <div className={styles.message}>Thank you!</div>
          <div className={styles.text}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </div>
        </div>
      </main>
    </>
  );
}