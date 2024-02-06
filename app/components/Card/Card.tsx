
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
        <h3>{restaurant.name}</h3>
        <img src={restaurant.picture} alt={restaurant.name} />
        <p> Date opened: {restaurant.openedDate}</p>
      </div>
    );
  };
  
  export default Card;
  