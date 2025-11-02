import React from 'react'
import styles from './HeroSection.module.css'
import Button from '../Button/Button'
import {motion} from 'framer-motion'
import heroSectionImg from '../../assets/images/krypto-img1.png'

const HeroSection = () => {

    return (
        <section className={styles.heroSection}>
            <motion.div
                className={styles.heroSectionInfo}
                initial={{
                opacity: 0,
                x: 0,
                y: -100
            }}  
                whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
                transition={{
                duration: 0.6,
                delay: 0.2
            }}
                viewport={{
                once: true
            }}>
                <h1>discover and collect rare nfts</h1>
                <p>The most secure marketplace for buyingand selling unique crypto assets.</p>
               
                <Button btnValue="buy nfts"/>
                <Button isSecondary btnValue="sell nfts"/>
            </motion.div>
            <motion.div
                className={styles.heroSectionImage}
                initial={{
                opacity: 0,
                x: 0,
                y: 100
            }}
                whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
                transition={{
                duration: 0.6,
                delay: 0.2
            }}
                viewport={{
                once: true
            }}>
                <img src={heroSectionImg} alt=""/>
            </motion.div>
        </section>
    )
}

export default HeroSection