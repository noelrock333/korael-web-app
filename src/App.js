import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
// import firebase from 'firebase';
// firebase.initializeApp()
// const database = firebase.database();

function App() {
  useEffect(() => {
    // var starCountRef = firebase.database().ref();
    // starCountRef.on('value', (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data)
    // });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
