import styles from './NavImage.module.css'
const NavImage = (props) => {
  const { src, alt } = props 
  return (
    <div className={styles.imageWrapper}>
        <img
          src={src}
          alt={alt}
          className={styles.image}
        />
      </div>
  )
}

export default NavImage