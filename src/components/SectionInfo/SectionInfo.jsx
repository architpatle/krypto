import React from 'react'
import Button from '../Button/Button'
import styles from './SectionInfo.module.css'

const SectionInfo = ({SectionInfoH4,SectionInfoH2,SectionInfoP, SectionInfoBtn}) => {
  return (
    <div className={styles.sectionInfo}>
      <h4>{SectionInfoH4}</h4>
      <h2>{SectionInfoH2}</h2>
      <p>{SectionInfoP}</p>
      <Button btnValue={SectionInfoBtn}></Button>
    </div>
  )
}

export default SectionInfo