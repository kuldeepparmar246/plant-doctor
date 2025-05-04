import { Home,Camera, User,Cloud, LogOut } from "lucide-react";
import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom";
const Navbar  = ({handleLogout}) => {
  
  return (
    <nav>
      <div className={styles.navbar}>
      <NavItem icon={<Home/>} label="Home" link="/home" />
      <NavItem icon={<Camera/>} label="Scan" link="/detect"/>
      <NavItem icon={<Cloud/>} label="Weather" />
      <NavItem icon={<User/>} label="Profile" />
      <NavItem icon={<LogOut />} label="Logout" handleLogout={handleLogout} link="/"/>
      </div>
    </nav>
  )
}

const NavItem = (props) => {
  const {icon,label,link,handleLogout} = props
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
    if(handleLogout) handleLogout()
  }
  
  return (
    <button className={styles.item} onClick={handleClick}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  )
}

export default Navbar