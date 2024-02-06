import React from 'react'

const Card = ({restaurant}) => {
  return (
    <div>
        <h3>{restaurant.name}</h3>
        <img src={restaurant.picture} alt={restaurant.name} />
        <p> Date opened: {restaurant.openedDate}</p>
    </div>
  )
}

export default Card