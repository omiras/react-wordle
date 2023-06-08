import { useState } from 'react';
import './App.css'
import Key from './Key'
import Letter from './Letter';

function App() {

  const [correctWord, setCorrectWord] = useState('bucle');
  const [guessWord, setGuessedWord] = useState('');


  const letters = "qwertyuiopasdfghjklñzxcvbnm";
  const tiles = [];

  for (let i = 0; i < 30; i++) {
    tiles.push(<Letter key={i} letter="" bgColor={"transparent"} />
    )
  }

  const handleNextLetter = (letter) => {
    console.dir(letter)
  }

  const handleDeleteLetter = () => {

  }

  const handleCheckWord = () => {

  }

  return (

    <>
      <h1 className='title'>Neriordle</h1>

      <div className='container'>
        {tiles}
      </div>

      <div className='container'>

        {letters.split('').map(x => <Key key={x} action={x} onKeySelected={handleNextLetter}> {x}</Key>)}

        <Key action="enviar" onKeySelected={handleCheckWord}>Enviar</Key>
        <Key action="delete" onKeySelected={handleDeleteLetter}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
          <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
        </svg></Key>


      </div>
    </>
  )
}

export default App
