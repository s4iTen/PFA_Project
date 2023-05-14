import React, { useState } from 'react';
import '../Styles/Style.scss';
import auth from '../firebase';

const Card = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>This is the content of the card.</p>
      <div className="buttons">
        <button className="buy-button">Buy Now</button>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
        { liked ?
            <i style={{paddingRight: 10}} className={'fas fa-heart'}></i> : <></>}Like
        </button>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;