import styles from './Button.module.css'
const Button = ({btnValue,isTertiary, isSecondary}) => {
  let btnClass = styles.btn

  if (isSecondary) {
    btnClass = `${styles.secondaryBtn} ${styles.btn}`
  }else if(isTertiary) {
    btnClass = `${styles.tertiaryBtn} ${styles.btn}`
  } else {
    btnClass = `${styles.primaryBtn} ${styles.btn}`

  }
  return(
    <button className={btnClass}>{btnValue}</button>
  )
}

export default Button