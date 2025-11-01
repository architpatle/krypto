import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {HiMenuAlt1} from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {

    const [menuOpen,
        setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <section className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>krypto</div>
                <div
                    className={`${styles.navlinks} ${menuOpen
                    ? styles.active
                    : ""}`}>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Buy NFTs</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.hamburger}>
                    <div
                        className={`${styles.bar} ${menuOpen ? styles.active : ""} ${menuOpen
                        ? styles.menuOpened
                        : styles.menuClosed}`}
                        onClick={handleMenuOpen}><HiMenuAlt1 fontSize={32}/></div>
                        <div className={`${styles.cross} ${menuOpen ? styles.active : ""} ${menuOpen
                        ? styles.menuOpened
                        : styles.menuClosed}`}
                        onClick={handleMenuOpen} ><MdOutlineClose fontSize={32}/></div>
                </div>
            </nav>
        </section>

    )
}

export default Navbar