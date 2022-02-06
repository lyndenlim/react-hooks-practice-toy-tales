import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeletedItem, handleAddedLikes }) {
  const toyList = toys.map(toy => {
    return <ToyCard 
    key={toy.id} 
    id={toy.id} 
    name={toy.name} 
    image={toy.image} 
    likes={toy.likes}
    handleDeletedItem={handleDeletedItem}
    handleAddedLikes={handleAddedLikes}
    /> 
  })

  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
