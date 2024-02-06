
import styles from "./Card.module.css"

type Restaurant = {
    id: number;
    name: string;
    picture: string;
    openedDate: string; // Assuming the opened date is a string for display purposes
  };

  type CardProps = {
    restaurant: Restaurant;
  };
  
  const Card: React.FC<CardProps> = ({ restaurant }) => {
    return (
      <div className={styles.card_container} >
        <div className={styles.image_container}>
        <img src={restaurant.picture} alt={restaurant.name} />
        </div>

        <div className={styles.card_info_container}>
        <h3>{restaurant.name}</h3>
        <p> Date opened: {restaurant.openedDate}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  