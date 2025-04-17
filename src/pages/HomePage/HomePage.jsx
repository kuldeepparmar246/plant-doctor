import React from "react";
import styles from './HomePage.module.css'
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import NavImage from "../../components/NavImage/NavImage";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Footer from "../../components/Footer/Footer";

const HomePage = (props) => {
  const { user, setUser } = props
  return (
    <div className={styles.container}>
      <Header user={user} setUser={setUser}/>

      <div className={styles.buttonWrapper}>
        <NavButton endpoint='/detect'>Get Started</NavButton>
        {!user && <NavButton endpoint='/login'>Login</NavButton>}
      </div>

      <NavImage src='../../potato-leaf.png' alt='Potato Leaf' />

     
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Services for Farmers</h2>

        <div className={styles.servicesGrid}>
          <ServiceCard 
            title='Crop Health Monitoring'
            description='Regular updates and insights about the health of your crops through AI-powered analysis.'
          />
          <ServiceCard 
            title='Farming Tips & Best Practices'
            description='Get season-wise suggestions, organic treatment methods, and disease prevention techniques.'
          />
          <ServiceCard 
            title='Weather Forecasting'
            description='Plan irrigation and harvesting better with real-time weather updates tailored for farmers.'
          />
          <ServiceCard 
            title='Fertilizer Recommendation'
            description='Receive AI-based fertilizer usage advice based on soil health and crop type.'
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage