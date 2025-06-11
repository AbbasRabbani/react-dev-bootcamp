import { useState } from 'react';

// Components

const Card = ({ title }) => {

  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(true)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}


const App = () => {
  // This is the main component of the application State


  return (
    <div className='card-container'>
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  )
}

export default App
