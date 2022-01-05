//import logo from './logo.svg';
//import './App.css';

/*function App() {
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
}*/

/*const App = () => {
  return (
    <h1>Hello world</h1>
  );
};

export default App; */
import React from 'react';
import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';
import Container from './components/Container/Container.js';
//import TextInput from './components/TextInput/TextInput'
//import Button from './components/Button/Button'
//import Column from './components/Column/Column'


const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;
