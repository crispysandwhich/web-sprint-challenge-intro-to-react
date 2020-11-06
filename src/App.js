import React, {useEffect, useState} from 'react';
import './App.css';
import Characters from './components/Character';
import Axios from 'axios';

const App = () => {

  const [cList, setCList] = useState([])
  
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        console.log(res.data.results)
        setCList(res.data.results)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <h1 className="Header">Rick & Morty API</h1>
      <Characters characters={cList} />
    </div>
  );
}

export default App;
