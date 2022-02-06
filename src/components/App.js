import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(toyData => setToys(toyData))
  }, [])

  function handleDeletedItem(id) {
    const updatedToys = toys.filter(toy => {
      if (toy.id !== id) {
        return toy
      } else {
        return false
      }
    })
    setToys(updatedToys)
  }

  function handleAddedToy(addedToy) {
    setToys([...toys, addedToy])
  }

  function handleAddedLikes(likedToy) {
    const updatedLikes = toys.map(toy => {
      if (toy.id === likedToy.id){
        return likedToy
      } else {
        return toy
      }
    })
    setToys(updatedLikes)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddedToy={handleAddedToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeletedItem={handleDeletedItem} handleAddedLikes={handleAddedLikes}/>
    </>
  );
}

export default App;
