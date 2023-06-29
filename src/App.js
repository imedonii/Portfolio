<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> Live
    </div>
  );
}

export default App;
