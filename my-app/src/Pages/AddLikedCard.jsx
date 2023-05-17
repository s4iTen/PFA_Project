import React, { useState } from 'react';

const AddLikedCard = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [likedCards, setLikedCards] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleAddLikedCard = () => {
    const newLikedCard = { title, text, image };
    setLikedCards([...likedCards, newLikedCard]);
    setTitle('');
    setText('');
    setImage('');
  };

  return (
    <div>
      <h2>Add Liked Card</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Text:
        <input type="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={handleImageChange} />
      </label>
      <button onClick={handleAddLikedCard}>Add Card</button>

      <h2>Liked Cards</h2>
      {likedCards.map((card, index) => (
        <div key={index}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <img src={card.image} alt="Card Image" />
        </div>
      ))}
    </div>
  );
};

export default AddLikedCard;