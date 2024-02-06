
import Link from "next/link";
import Card from "../components/Card/Card";

import { Restaurant } from "@/types";
import styles from "./RestaurantsList.module.css"


async function fetchData() {
  const res = await fetch('http://localhost:8000/restaurants', {
     next: {
      revalidate: 1
     }
  })
  
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



export default async function Home() {

  const restaurants = await fetchData()
  console.log(restaurants)

  return (
    <main className={styles.restaurants_container}>
      <h2>See our restaurants</h2>

      <div className={styles.restaurants_cards_container}>

    {restaurants.map((restaurant: Restaurant) => (
      <Link href={`/restaurants/${restaurant.id}`}>
      <Card key={restaurant.id} restaurant={restaurant} />
      </Link>
    ))}
      </div>
  </main>
  );
}
