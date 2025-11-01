import React from 'react'
import styles from './GetOurApp.module.css'
import GetOurAppImg from '../../assets/images/krypto-getOurApp.png'
import SectionInfo from '../SectionInfo/SectionInfo'
import {motion} from 'framer-motion'

const GetOurApp = () => {
    return (
        <div className={styles.getOurAppSection}>
            <motion.div
                
                initial={{
                opacity: 0,
                x: -100
            }}
                whileInView={{
                opacity: 1,
                x: 0
            }}
                transition={{
                duration: 0.6,
                delay: 0.2
            }}
                viewport={{
                once: true
            }}>
                <SectionInfo
                    SectionInfoH4="Get Our App"
                    SectionInfoH2="Browse NFTs from your smartphone"
                    SectionInfoP="Our Krypto app is the easiest way to keep track of your assets when you’re on the go."
                    SectionInfoBtn="Download on ios"/>
            </motion.div>
            <motion.img
                src={GetOurAppImg}
                alt="GetOurAppImg"
                initial={{
                opacity: 0,
                x: 100
            }}
                whileInView={{
                opacity: 1,
                x: 0
            }}
                transition={{
                duration: 0.6,
                delay: 0.2
            }}
                viewport={{
                once: true
            }}/>
        </div>
    )
}

export default GetOurApp