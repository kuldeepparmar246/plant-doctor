import { Home,Camera, User,Cloud, LogOut } from "lucide-react";
import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom";
const Navbar  = () => {
  return (
    <nav>
      <div className={styles.navbar}>
      <NavItem icon={<Home/>} label="Home" link="/home" />
      <NavItem icon={<Camera/>} label="Scan" link="/detect"/>
      <NavItem icon={<Cloud/>} label="Weather" />
      <NavItem icon={<User/>} label="Profile" />
      <NavItem icon={<LogOut />} label="" />
      </div>
    </nav>
  )
}

const NavItem = ({ icon, label,link }) => {
  const navigate = useNavigate()
  
  return (
    <button className={styles.item} onClick={() => navigate(link)}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  )
}

export default Navbar