import React from 'react'
import Die from './Components/Die'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const randomDieNumber = []
    for(let i=0; i<10; i++) {
      randomDieNumber.push(Math.floor(Math.random() * 6) + 1)
    }
    return randomDieNumber;
  }

  console.log(dice)

  return (
    <div className="App">
      <main>
        <div className="dice-container">
          {
            dice.map(number => <Die value={number}/>)
          }
        </div>
      </main>
    </div>
  );
}

export default App;
