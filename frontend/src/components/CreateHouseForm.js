import React, { useState } from "react";

function CreateHouseForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/houses/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address,})
      })

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
      } else {
        const errorData = await response.json();
        console.log('Error:', errorData.errors)
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Create a House</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        {/* <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br /> */}
        <button type="submit">Create House</button>
      </form>
    </div>
  )
}

export default CreateHouseForm
