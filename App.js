import logo from './logo.svg';
import './App.css';
import Weather from './components/weather';
import News from './components/news';

function App() {
  return (
    <div className="App">
      <header >
        < Weather> </Weather>
        < News> </News>
      </header>
    </div>
  );
}

export default App;
