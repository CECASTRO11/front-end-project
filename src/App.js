import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';
import React from 'react';

function App() {
  const [userId, setUser] = React.useState((Math.floor(Math.random() * (10 - 1 + 1) + 1)));
  const setID = () => {
    console.log(userId);
    setUser((Math.floor(Math.random() * (10 - 1 + 1) + 1)));
  }
  return (
    <div className="App">
      <Profile userId = {userId}/>
      <div className="button">
        <button onClick={setID}>Cambiar Persona</button>
      </div>
    </div>
  );
}
export default App;
