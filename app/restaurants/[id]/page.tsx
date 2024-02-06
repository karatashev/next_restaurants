import Card from '@/app/components/Card/Card'
import React from 'react'


async function getRestaurant(id: string) {
    const res = await fetch('http://localhost:8000/restaurants/' + id)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  

  type Params = {
    id: string
  }

  type RestaurantDetailsProps = {
    params: Params;
  }

const RestaurantDetails: React.FC<RestaurantDetailsProps> = async ({params}) => {
    const restaurant = await getRestaurant(params.id)
    console.log(restaurant, 'restaurant')
  return (
    <div>
        <Card key={restaurant.id} restaurant={restaurant} />

    </div>
  )
}

export default RestaurantDetails