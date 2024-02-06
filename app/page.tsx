
import styles from "./page.module.css";


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
    <main className={styles.main}>
    {restaurants.map((item:any) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <img src={item.picture} alt={item.name} />
        <p> Date opened: {item.openedDate}</p>
      </div>
    ))}
    </main>
  );
}
