import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} alt="profile" />
    </div>
  );
}

function App() {
  return (
    <div>
        {foodILike.map(renderFood)}
    </div>
  );
}

const foodILike = [
  {
    name : 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-xNPwouDqZDynzHSu2ctSAHaFC%26pid%3DApi&f=1',
  },
  {
    name : 'Samgyeopsal',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JdMkDRS5dlMNJqMBr8vWDQHaFj%26pid%3DApi&f=1',
  },
  {
    name : 'Bibimbap',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z9ft1sb7e-dWAAnUh7igAAHaFA%26pid%3DApi&f=1',
  },
];

export default App;