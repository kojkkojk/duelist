import './App.css';
import Allsearch from './components/char/Allsearch';
import AllItemSearch from './components/items/AllItemSearch';
import Top from './components/sub/Top';
import Bot from './components/sub/Bot';
import Board from './components/sub/Board';
import Posts from './components/sub/Posts';
import CardSelect from './components/items/CardSelect';
import Cards from './components/items/Cards';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Top />
      <div className='banner'></div>
      <Routes>
        <Route path='/' element={<Allsearch />} />
        <Route path='/items' element={<AllItemSearch />} />
        <Route path='/boards'>
          <Route path='/boards' element={<Board />} />
          <Route path=':userId' element={<Posts />} />
        </Route>
        <Route path='/card' >
          <Route path='/card' element={<CardSelect />} />
          <Route path=':rarity' element={<Cards />} />
        </Route>
      </Routes>
      <Bot />
    </>
  );
}

export default App;
