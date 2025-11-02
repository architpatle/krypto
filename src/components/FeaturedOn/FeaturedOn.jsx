import React from 'react'
import styles from './FeaturedOn.module.css'
import { motion } from 'framer-motion'
import featuredOne from '../../assets/images/krypto-fo-1.png'
import featuredTwo from '../../assets/images/krypto-fo-2.png'
import featuredThree from '../../assets/images/krypto-fo-3.png'
import featuredFour from '../../assets/images/krypto-fo-4.png'


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
                <img src={featuredOne} alt="krypto-fo-1"/>
                <img src={featuredTwo} alt="krypto-fo-2"/>
                <img src={featuredThree} alt="krypto-fo-3"/>
                <img src={featuredFour} alt="krypto-fo-4"/>
            </div>
        </motion.section>
    )
}

export default FeaturedOn