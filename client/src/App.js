// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
// import Dhaboard from './components/Dashboard';
import Error from './components/Error';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (<>  
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
