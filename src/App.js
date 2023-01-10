import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/clearbutton';
import './stylesheets/ClearButton.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateTotal = () => {
    if (input){
      setInput(evaluate(input));
    }else{
      alert('Por favor, ingrese valores')
    }

  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Calculadora con React</h1>
        <h2>por Juan Manuel Cabrera</h2>
      </div>
      <div className='calculator-container'>
        <Screen 
        input={input}/>
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={calculateTotal}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
        <ClearButton manageClear={() => setInput('')}>Borrar</ClearButton>
      </div>
      </div>
      
    </div>
  );
}

export default App;
