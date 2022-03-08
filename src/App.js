import React from 'react'
import {nanoid} from 'nanoid'

import Die from './Components/Die'
import Button from './Components/Button'

function App() {

  const [dice, setDice] = React.useState(allNewDice())
  console.table(dice)

  function allNewDice() {
    const randomDieNumber = []
    for(let i=0; i<10; i++) {
      randomDieNumber.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return randomDieNumber;
  }
  
  function updateDice() {
    setDice(oldDice => oldDice.map(die => (
      die.isHeld ? die : {...die, id: nanoid(), value: Math.ceil(Math.random() * 6)}
    )))
  }

  function holdDice(id) {
    setDice(prevDice => (
      prevDice.map((prevDie => (
        prevDie.id === id ? {...prevDie, isHeld: !prevDie.isHeld} : prevDie
      )))
    ))
  }

  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>
  ))

  console.log("Dice Elements",diceElements)

  return (
    <div className="App">
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <Button rollDice={updateDice}/>
      </main>
    </div>
  );
}

export default App;
