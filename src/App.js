import CurrentWeather from "./componets/CurrentWeather";
import Search from "./componets/Search";
import './App.css';

function App() {
  return (
    <div className={'wrapper'}>
          <Search/>
          <CurrentWeather className={'weather'}/>
    </div>
  );
}

export default App;
