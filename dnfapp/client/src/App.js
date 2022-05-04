import './App.css';
import Allsearch from './components/char/Allsearch';
import AllItemSearch from './components/items/AllItemSearch';
import Top from './components/sub/Top';
import Board from './components/sub/Board';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Top/>
      <Routes>
        <Route path='/' element={<Allsearch />} />
        <Route path='/items' element={<AllItemSearch />} />
        <Route path='/boards' element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
