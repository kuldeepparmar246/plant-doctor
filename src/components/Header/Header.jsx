import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Crop Disease Detector</h1>
      <p className={styles.description}>
        Instantly detect diseases in  plants using the power of AI. Upload an image of a Crop leaf and get insights in seconds.
      </p>
    </div>
  )
}

export default Header