import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';

function App() {
  return (
    
    <div className="App">
      <Profile user={
          {
            name: 'Juan',
            username: 'juanito',
            email: 'adad@gmail.com',
            photo: 'https://picsum.photos/200/300',
        }}/>
    </div>
  );
}

export default App;
