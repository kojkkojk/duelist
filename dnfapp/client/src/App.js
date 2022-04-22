import './App.css';
import Allsearch from './components/char/Allsearch';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Allsearch />} />
      </Routes>
    </div>
  );
}

export default App;
