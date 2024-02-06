"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { json } from "stream/consumers";
import styles from "./CreateForm.module.css"

const RestaurantForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      picture: '',
      address: '',
      cuisine: [],
      city: '',
      opened: '',
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();

  
        const res = await fetch("http://localhost:8000/restaurants", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(formData)    
        })

        if (res.status === 201) {
            router.push('/restaurants')
        }
    };
  
    const handleChange = (e) => {
      const { name, value, type } = e.target;
      if (type === 'select-multiple') {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        setFormData({ ...formData, [name]: selectedOptions });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>

        <label>
          Picture URL:
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            placeholder="Picture URL"
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </label>

        <label>
          Cuisine:
          <select
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            multiple // Enable multiple selection
          >
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="French">French</option>
            <option value="Greek">Greek</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="Macedonian">Macedonian</option>
          </select>
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
        </label>

        <label>
          Date Opened:
          <input
            type="date"
            name="opened"
            value={formData.opened}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default RestaurantForm;
