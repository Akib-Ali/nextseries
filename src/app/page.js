import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Learning Next Js</h1>
        <Link href="/about">Go to about</Link>

        <Link href="/login/loginstudent">Login Teacher page go</Link>

        <Link href="/login/loginteacher">Login student page go</Link>

        <Link href="/userlist">User List</Link>

        <Link href="/contactus">go Contact us after Redirection</Link>
       
       </main>
    </div>
  );
}
