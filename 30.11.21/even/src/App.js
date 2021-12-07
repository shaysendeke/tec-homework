import logo from './logo.svg';
import './App.css';
import Numbers from './components/Numbers';

function App() {
  let date = new Date()
  date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  return (
    <div className="App">
      Shay Sendeke - Even Numbers Game
      <p>{date}</p>
      <Numbers />
    </div>
  );
}

export default App;
