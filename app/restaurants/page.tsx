
import Link from "next/link";
import Card from "../components/Card/Card";

import { Restaurant } from "@/types";


async function fetchData() {
  const res = await fetch('http://localhost:8000/restaurants')
 
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
    <main className={""}>
    {restaurants.map((restaurant: Restaurant) => (
      <Link href={`/restaurants/${restaurant.id}`}>
      <Card key={restaurant.id} restaurant={restaurant} />
      </Link>
    ))}
  </main>
  );
}
