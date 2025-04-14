import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy; {new Date().getFullYear()} Potato Disease Detection. All rights reserved.
    </div>
  )
}

export default Footer