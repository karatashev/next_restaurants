"use client"

import { useState } from "react";

const RestaurantForm = () => {
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      picture: '',
      address: '',
      cuisine: '',
      city: '',
      opened: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement form submission logic
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>

        <label>
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            placeholder="Picture URL"
          />
        </label>

        <label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </label>

        <label>
          <input
            type="text"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            placeholder="Cuisine"
          />
        </label>

        <label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
        </label>

        <label>
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