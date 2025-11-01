import React from 'react'
import SectionInfo from '../SectionInfo/SectionInfo'
import AnalyticsImg from '../../assets/images/krypto-analytics.png'
import styles from './Analytics.module.css'
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div className={styles.analyticsSection}>
 
      {/* Left-side Image (slides in from left) */}
      <motion.img
        src={AnalyticsImg}
        alt="AnalyticsImg"
        className={styles.analyticsImg}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Right-side Text Section (slides in from right) */}
      <motion.div
        className={styles.sectionInfoWrapper}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <SectionInfo
          SectionInfoH4="analytics"
          SectionInfoH2="Built-in analytics to track your NFTs"
          SectionInfoP="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time."
          SectionInfoBtn="View our pricing"
        />
      </motion.div>

    </div>
  )
}

export default Analytics
