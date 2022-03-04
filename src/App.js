import './App.css';
import Die from './Components/Die'

function App() {
  return (
    <div className="App">
      <main>
        <div className="dice-container">
          <Die value={1}/>
          <Die value={3}/>
          <Die value={6}/>
          <Die value={1}/>
          <Die value={4}/>
          <Die value={2}/>
          <Die value={3}/>
          <Die value={1}/>
          <Die value={5}/>
          <Die value={5}/>
        </div>
      </main>
    </div>
  );
}

export default App;
