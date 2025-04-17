import styles from './Header.module.css'
const Header = (props) => {
  const { user, setUser} = props

  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)
  }
  
  return (
    <div className={styles.header}>
      {user && <div className={`${styles.description} ${styles.content}`} > 
        {user.username}
        <button className={styles.button} onClick={handleLogout}>logout</button>
      </div>}
      <h1 className={styles.title}>Crop Disease Detector</h1>
      <p className={styles.description}>
        Instantly detect diseases in  plants using the power of AI. Upload an image of a Crop leaf and get insights in seconds.
      </p>
    </div>
  )
}

export default Header