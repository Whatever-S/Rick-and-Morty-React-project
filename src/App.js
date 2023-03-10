import Title from "./components/app-title/App-title";
import SearchPanel from "./components/search-panel/Search-panel";

import './App.scss'
import { useEffect, useState } from "react";
import CharList from "./components/char-list/Char-list";


function App() {

  let _apiBase = `https://rickandmortyapi.com/api/character`;

  let [receivedData, updateReceivedData] = useState([]);

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
      <CharList characters={receivedData.results}/>
    </div>
  );
}

export default App;
