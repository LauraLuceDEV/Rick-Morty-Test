import logo from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [charactersArr, setChars] = useState(null);

  const reqApi = async() => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await api.json();
    setChars(characters.results);
  }

  // console.log(charactersArr);

  return (
    <div className="App">
      <header className="App-header">
        {/* Ternario */}
        {charactersArr ? (<Characters charsVar={charactersArr}/>) 
          :(
          <>
            <h1 className='title'>Rick Y Morty</h1>
            <img src={logo} alt='Rick y Morty' className='img-home'/>
            <button onClick={reqApi} className='btn-search'>Buscar Personaje</button>
          </>
         )
        }
      </header>
    </div>
  );
}

export default App;
