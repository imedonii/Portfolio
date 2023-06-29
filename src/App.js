import './App.css';
import { Header } from './componets/Header';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './Pages/Home';
import { Portfolio } from './Pages/Portfolio';
import { About } from './Pages/About';

function App() {
  return (
    <div className='width-page'>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
