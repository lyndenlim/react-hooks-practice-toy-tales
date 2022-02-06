import React, { useState } from "react";

function ToyCard({ id, name, image, likes, handleDeletedItem, handleAddedLikes }) {
  const [newLikes, setNewLikes] = useState(likes + 1)


  function handleLikes() {
    
    setNewLikes(newLikes => newLikes + 1)
    
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then(resp => resp.json())
    .then(data => handleAddedLikes(data))
  }
  
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => handleDeletedItem(id))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
