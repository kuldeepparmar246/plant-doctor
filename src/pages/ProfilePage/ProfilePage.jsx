import styles from './ProfilePage.module.css'

const ProfilePage = (props) => {
  const { user } = props

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.label}>Username</p>
        <p className={styles.info}>{user.username}</p>
      </div>
      <div className={styles.card}>
        <p className={styles.label}>Name</p>
        <p className={styles.info}>{user.name}</p>
      </div>
    </div>
  )
}

export default ProfilePage