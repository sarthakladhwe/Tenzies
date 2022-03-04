import React from 'react'
import Die from './Components/Die'
import Button from './Components/Button'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const randomDieNumber = []
    for(let i=0; i<10; i++) {
      randomDieNumber.push(Math.ceil(Math.random() * 6))
    }
    return randomDieNumber;
  }

  function updateDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map(number => <Die value={number}/>)

  return (
    <div className="App">
      <main>
        <div className="dice-container">
          { diceElements }
        </div>
        <Button rollDice={updateDice}/>
      </main>
    </div>
  );
}

export default App;
