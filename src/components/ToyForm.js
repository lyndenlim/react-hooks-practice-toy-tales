import React, { useState } from "react";

function ToyForm({ handleAddedToy }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      name: name,
      image: image,
      likes: 0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        handleAddedToy(data)
        setName("")
        setImage("")
      })

  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
        />
        <br />
        <input
          onChange={handleImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
