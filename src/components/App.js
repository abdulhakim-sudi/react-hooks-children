import React from 'react';
import Container from './Container';

function App() {
  return (
    <div>
      <Container
        direction="column"
        header="🌸 Anime World"
        textPosition="center"
        contentPosition="center"
      >
        <p>Explore your favorite anime shows and connect with fellow fans!</p>
      </Container>

      <Container
        direction="row"
        header="🍽️ Dubai Eats"
        textPosition="left"
        contentPosition="right"
      >
        <ul>
          <li>Al Baik</li>
          <li>Nusr-Et Steakhouse</li>
          <li>Zuma Dubai</li>
        </ul>
      </Container>

      <Container
        direction="row"
        header="💱 Forex Tracker"
        textPosition="right"
        contentPosition="left"
      >
        <div>
          <img src="https://via.placeholder.com/150" alt="Forex chart" />
          <p>Track the latest market trends and exchange rates in real time.</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
