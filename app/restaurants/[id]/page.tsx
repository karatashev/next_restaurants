"use client"

import Card from '@/app/components/Card/Card'
import React, { useState } from 'react'
import { Restaurant } from '@/types'
import styles from "./RestaurantDetails.module.css"
import Modal from '@/app/components/Modal/Modal'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// export const dynamicParams = true

// export async function generateStaticParams() {
//     const res = await fetch("http://localhost:8000/restaurants")

//     const restaurants = await res.json()

//     return restaurants.map((restaurant: Restaurant) => ({
//         id: restaurant.id
//     }))
// } 

async function getRestaurant(id: string) {
  
    const res = await fetch('http://localhost:8000/restaurants/' + id, {
        next: {
            revalidate: 0
        }
    })
   
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
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false);

    const restaurant = await getRestaurant(params.id)


    const handleDelete = async () => {
      try {

        await fetch(`http://localhost:8000/restaurants/${params.id}`, { method: 'DELETE' });
  
        setIsModalOpen(false);

        router.push("/restaurants")

      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }
    };

    const handleEdit = () => {
      router.push(`/restaurants/${restaurant.id}/update`);
    }

  return (
    <div className={styles.details_container}>
      <h2>Restaurant Details</h2>
        <Card key={restaurant.id} restaurant={restaurant} />
        <div className={styles.buttons_container}>

        <button onClick={handleDelete}>Delete Restaurant</button>
        <button onClick={handleEdit}>Edit</button>
        </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleDelete} />
    </div>
  )
}

export default RestaurantDetails