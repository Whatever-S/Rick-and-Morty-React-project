import Title from "./components/app-title/App-title";
import SearchPanel from "./components/search-panel/Search-panel";

import './App.scss'
import { useEffect, useState } from "react";


function App() {

  let _apiBase = `https://rickandmortyapi.com/api/character`;

  let [receivedData, updateReceivedData] = useState([]);
  console.log(receivedData.results)
    

    useEffect(()=>{
      (async function(){
        let data = await fetch(_apiBase).then(res => res.json())
        updateReceivedData(data)
      })();
    },[_apiBase]);

  return (
    <div className="App container">
      <Title/>
      <SearchPanel/>
    </div>
  );
}

export default App;
