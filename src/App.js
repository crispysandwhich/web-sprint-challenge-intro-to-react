import React, {useEffect, useState} from 'react';
import './App.css';
import Characters from './components/Character';
import Axios from 'axios';
import styled from 'styled-components'


const StyleApp = styled.div`
  color: ${pr => pr.theme.primaryColor};
  background-color: ${pr => pr.theme.secondaryColor};
  text-align: center;

` 



const App = () => {

  const [cList, setCList] = useState([])
  
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/?page=1')
      .then(res =>{
        // console.log(res.data.results)
        setCList(res.data.results)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <StyleApp>
      <header id="mainHeader">
        <h1 className="title">Rick & Morty API</h1>
        <p className="copyright">Made with love <a href="https://ghostieve.com" target='_blank'>de_gentleman</a></p>
      </header>
      <Characters characters={cList} />
    </StyleApp>
  );
}

export default App;
