import CurrentWeather from "./componets/CurrentWeather";
import Search from "./componets/Search";
import {useSelector} from "react-redux";

function App() {
    const apiData = useSelector(state => state.api);

  return (
    <main>
          <Search/>
        {apiData.hasError?<h1>CITY OR STATE WAS FOUND<br/>TRY AGAIN</h1>:<CurrentWeather/>}
    </main>
  );
}

export default App;
