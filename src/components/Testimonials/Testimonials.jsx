import React from 'react'
import styles from './Testimonials.module.css'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import Img1 from '../../assets/images/krypto-testimonials-img1.png'
import Img2 from '../../assets/images/krypto-testimonials-img2.png'
import Img3 from '../../assets/images/krypto-testimonials-img3.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    return (
        <div className={styles.testimonialsSection}>
            <motion.div
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
                <h4>testimonials</h4>
                <h2>read what others have to say</h2>
            </motion.div>
            <div className={styles.testimonialsCardSection}>
                <motion.div
                    initial={{
                    opacity: 0,
                    x: -100,
                    y: 0
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
                    <TestimonialsCard
                        CardImg={Img1}
                        CardH6="Olivia cole"
                        CardP="KRYPTO makes tracking and learning about crypto effortless. Clean, modern, and fast! "/>
                </motion.div>
                <motion.div 
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
                    <TestimonialsCard
                        CardImg={Img2}
                        CardH6="Evan white"
                        CardP="I love the simplicity and smooth animations — everything feels so intuitive."/>
                </motion.div>
                <motion.div 
                initial={{
                    opacity: 0,
                    x: 100,
                    y: 0
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
                    <TestimonialsCard
                        CardImg={Img3}
                        CardH6="jessica page"
                        CardP="A beautiful interface with great attention to detail. Perfect for anyone exploring crypto.”"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Testimonials