import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
