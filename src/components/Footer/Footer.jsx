import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerAbove}>
                    <div className={styles.footerLogo}>
                        KRYPTO
                    </div>
                    <div className={styles.footerNav}>
                        <h6>krypto</h6>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Buy NFTs</li>
                            <li>Sell NFTs</li>
                        </ul>
                    </div>
                    <div className={styles.footerMarket}>
                        <h6>Market</h6>
                        <ul>
                            <li>Browse NFTs</li>
                            <li>Buy NFTs</li>
                            <li>Sell NFTs</li>
                        </ul>
                    </div>
                    <div className={styles.footerContact}>
                        <h6>Contact</h6>
                        <ul>
                            <li>Email</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className={styles.footerNews}>
                        <h6>join our newsletter</h6>
                        <div className={styles.footerNewsMail}>
                            <input type="email" placeholder='Email Address'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBelow}>
                    <div className={styles.designCredits}>
                        <p>| UI Designed By <span> <a href="https://youtu.be/HZuk6Wkx_Eg?si=yjknS5kK9I8x5jwi" target='_blank'>Flux Academy</a> |</span> </p> 
                    </div>
                    <div className={styles.developedCredits}>
                        <p>| Web Page Developed by <span> <a href="https://www.linkedin.com/in/archit-patle/" target='_blank'>Archit Patle</a> |</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer