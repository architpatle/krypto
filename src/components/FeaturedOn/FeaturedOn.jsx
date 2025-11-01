import React from 'react'
import styles from './FeaturedOn.module.css'
import { motion } from 'framer-motion'

const FeaturedOn = () => {  
    return (
        <motion.section className={styles.featuredOnSection}
        initial={{
                opacity: 0,
                x: 0,
                y: 100
            }}
                whileInView={{
                opacity: 1,
                x: 0,
                y:0
            }}
                transition={{
                duration: 0.6,
                delay: 0.2
            }}
                viewport={{
                once: true 
            }}>
            <h2>Featured On</h2>
            <div className={styles.companyLogos}>
                <img src="./public/images/krypto-fo-1.png" alt="krypto-fo-1"/>
                <img src="./public/images/krypto-fo-2.png" alt="krypto-fo-2"/>
                <img src="./public/images/krypto-fo-3.png" alt="krypto-fo-3"/>
                <img src="./public/images/krypto-fo-4.png" alt="krypto-fo-4"/>
            </div>
        </motion.section>
    )
}

export default FeaturedOn