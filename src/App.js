import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="app">
     <Body></Body>
     <Header></Header>
    </div>
  );
}

export default App;
