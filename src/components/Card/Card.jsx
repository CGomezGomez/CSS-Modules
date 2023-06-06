import style from './card.module.css';

const Card = () => {
  return (

    <div className={`${style.container}`}>
      <div className={`${style.card} ${style.orange}`}>
          <img src="icon-sedans.svg" alt="Sedans"/>
          <h2 className={style.cardh2}>SEDANS</h2>
          <p className={style.cardp}>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          <button className={`${style.button} ${style.buttonorange}`}>Learn More</button>
      </div>
      <div className={`${style.card} ${style.blue}`}>
          <img src="icon-suvs.svg" alt="Suvs"/>
          <h2 className={style.cardh2}>SUVS</h2>
          <p className={style.cardp}>Take an SUV fpr ots spacious interior, power, and versality. Perfect for your next family vacation and off-road adventures.</p>
          <button className={`${style.button} ${style.buttonblue}`}>Learn More</button>
      </div>
      <div className={`${style.card} ${style.green}`}>
          <img src="icon-luxury.svg" alt="Luxury"/>
          <h2 className={style.cardh2}>LUXURY</h2>
          <p className={style.cardp}>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
          <button className={`${style.button} ${style.buttongreen}`}>Learn More</button>
      </div>
    </div>
    
  );
};

export default Card;