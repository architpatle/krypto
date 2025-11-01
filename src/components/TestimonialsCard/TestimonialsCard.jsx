import React from 'react'
import styles from './TestimonialsCard.module.css'

const TestimonialsCard = ({CardImg, CardH6, CardP}) => {
    return (
        <div className={styles.TestimonialsCardContainer}>
            <img src={CardImg} alt="Image"/>
            <div className={styles.TestimonialsCard}>
                <h6>{CardH6}</h6>
                <p>{CardP}</p>
            </div>
        </div>
    )
}

export default TestimonialsCard