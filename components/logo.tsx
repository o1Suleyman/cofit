import Image from "next/image";
import styles from "./logo.module.css";

export default function Logo() {
    return (<>
        <Image src="/dark.png" width={150} height={34} alt="Logo" className={styles.Light} />
        <Image src="/light.png" width={150} height={34} alt="Logo" className={styles.Dark} />
    </>)
}