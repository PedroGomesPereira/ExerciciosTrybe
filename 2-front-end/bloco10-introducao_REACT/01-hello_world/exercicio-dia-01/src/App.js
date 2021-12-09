import react from 'react';
import logo from './logo.svg';
import './App.css';

const compromisos = ['estudar', 'exercitar', 'jogar com amigos', 'descansar']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return compromisos.map((item) => Task(item));
}

export default App;
