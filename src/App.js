import './App.css';
import PromisesAndAxios from './Components/PromisesAndAxios';
import Home from './Components/Home';
import Mixed from './Components/Mixed';

function App() {
  return (
    <div className="App">
      <Home/>
      <Mixed/>
      {/* <PromisesAndAxios/> */}
    </div>
  );
}

export default App;
