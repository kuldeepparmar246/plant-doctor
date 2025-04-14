import styles from './NavButton.module.css'
const NavButton = (props) => {
  const { endpoint, children } = props
  return (
    <a href={endpoint}>
      <button className={styles.button}>{children}</button>
    </a>
  )
}

export default NavButton