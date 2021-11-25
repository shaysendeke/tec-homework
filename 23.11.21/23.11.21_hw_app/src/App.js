import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Register from './components/Register';

function App() {
  let date = new Date()
  date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {date}
        </p>
        </header>
        <Weather /><br/>
        <Register />
    </div>
  );
}

export default App;
