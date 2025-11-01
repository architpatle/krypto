import React from 'react'
import Button from '../Button/Button'
import styles from './CtaSection.module.css'
import { motion } from 'framer-motion'

const CtaSection = () => {
    return (
        <motion.div className={styles.CtaSection}
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
            <h4>are you ready?</h4>
            <h2>be a part of the next big thing</h2>
            <Button isTertiary btnValue="Get started"/>
        </motion.div>
    )
}

export default CtaSection