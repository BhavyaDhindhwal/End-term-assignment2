import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="App">
      <div className="like-container">
        <button 
          className={`like-btn ${isLiked ? 'liked' : ''}`}
          onClick={toggleLike}
        >
          <span className="heart-icon">
            {isLiked ? '♥' : '♡'}
          </span>
          <span className="like-count">{likeCount}</span>
        </button>
      </div>
    </div>
  );
}

export default App;