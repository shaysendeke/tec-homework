// import './App.css';import Home from './pages/Home';
// import Login from './pages/Login'
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';
import MyName from './components/Myname';
import Name from './components/Name';
import ThreeCounters from './components/ThreeCounters';


function App() {
  return (
    <div className="App">
      <MyName /><hr />
      <Name userName={"Shay"} /><hr/>
      <ThreeCounters />
    
    </div>
  )
}

export default App
