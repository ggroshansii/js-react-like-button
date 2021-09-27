
import { useState } from 'react';

function App() {

    const [likes, setLikes] = useState([]);
  
    function addLike() {
      let plusOne = likes.length + 1;
      setLikes([...likes, plusOne]);
    }

    function likePunctuation(arr) {
      if (likes.length === 0) {
        return 'Like';
      }
      else if ((likes[likes.length - 1]) < 2) {
        return 'Like ' + likes[likes.length - 1];
      } else {
        return 'Likes ' + likes[likes.length - 1];
      }
    }
  
    // const likesHTML = likes.map(like => {
    //   return <li>{likes}</li>
    // })

  return (
    <div className="App">
      <button onClick={addLike}>{likePunctuation(likes)}</button>
    </div>
  );
}

export default App;
