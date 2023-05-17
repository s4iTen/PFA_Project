import React, { useState } from 'react';
import '../Styles/Style.scss';
import auth from '../firebase';

const Card = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    // Save the liked state to a user's liked cards list in the backend or local storage
    // You can use auth.currentUser.uid to identify the current user if using Firebase authentication
    // Example: Save the liked state to Firestore database
    // auth.firestore().collection('users').doc(auth.currentUser.uid).update({
    //   likedCards: liked ? firebase.firestore.FieldValue.arrayRemove(cardId) : firebase.firestore.FieldValue.arrayUnion(cardId)
    // });
  };

  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>This is the content of the card.</p>
      <div className="buttons">
        <button className="buy-button">Buy Now</button>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          {liked ? <i style={{ paddingRight: 10 }} className={'fas fa-heart'}></i> : <></>}
          {liked ? 'Liked' : 'Like'}
        </button>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;