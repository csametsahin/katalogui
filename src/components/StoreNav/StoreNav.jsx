// import styles of this component
import styles from "./StoreNav.module.css"

// import other components
import Button from "../Elements/Button/Button"

// import other react pkg to use
import { HambergerMenu } from "iconsax-react"

// Nav component
const StoreNav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
        <h1 className={styles["nav-title"]}>Bektaş'ın Sergisi</h1>
        <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
            <li className={`${styles["nav-item"]} ${styles.active}`}>
                <a href="" className={styles["nav-link"]}>Ana Sayfa</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles["nav-link"]}>Hakkımızda</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles["nav-link"]}>İletişim</a>
            </li>
        </ul>
        <div className={`flex ${styles["navbar-buttons"]}`}>
            <Button theme="matrix">Katalogla</Button>
        </div>
        <div className={styles["navbar-responsive-menu"]}>
            <Button theme="transparent">
                <HambergerMenu size="32" color="var(--white-100)"/>
            </Button>
        </div>
    </nav>
  )
}

export default StoreNav