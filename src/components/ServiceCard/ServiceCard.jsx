import styles from './ServiceCard.module.css'
const ServiceCard = (props) => {
  const { title, description }  = props
  return (
    <div className={styles.serviceCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard