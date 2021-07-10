import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt="profile" />
    </div>
  );
}

function App() {
  return (
    <div>
        {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name : 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-xNPwouDqZDynzHSu2ctSAHaFC%26pid%3DApi&f=1',
    rating: 5.0 ,
  },
  {
    id: 2,
    name : 'Samgyeopsal',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JdMkDRS5dlMNJqMBr8vWDQHaFj%26pid%3DApi&f=1',
    rating : 4.9,
  },
  {
    id: 3,
    name : 'Bibimbap',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z9ft1sb7e-dWAAnUh7igAAHaFA%26pid%3DApi&f=1',
    rating : 4.3
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;