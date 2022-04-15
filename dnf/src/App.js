import './App.css';
import Bts from './components/Bts';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Bts />} />
      </Routes>
    </div>
  );
}

export default App;
