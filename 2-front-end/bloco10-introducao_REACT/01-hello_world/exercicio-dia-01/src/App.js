import './App.css';
import Header from './Header';
import Content from './Content';

//const compromisos = ['estudar', 'exercitar', 'jogar com amigos', 'descansar']

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

function App() {
  // return compromisos.map((item) => Task(item));
  return (<Header />, <Content />)
}

export default App;
