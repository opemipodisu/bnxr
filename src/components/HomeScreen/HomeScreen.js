import React from 'react';
import './HomeScreen.css';
import { Container, Row, Col } from 'react-grid-system';

export default function HomeScreen({ createCall, startHairCheck }) {
  const startDemo = () => {
    createCall().then((url) => {
      startHairCheck(url);
    });
  };

  return (
    <div className="home-screen">
      <h1>Hey there! 👋🏾</h1>
      <p>Excited you've made it here, this was built with Daily.co's API and React. 🤩</p>
      <button onClick={startDemo}>Create a meeting now ⚡️</button>

    </div>
  );
}
