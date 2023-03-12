import Title from "../components/app-title/App-title"
import SearchPanel from "../components/search-panel/Search-panel"
import CharList from "../components/char-list/Char-list"

import { useEffect, useState } from "react";

const MainPage = () =>{
    let [receivedData, updateReceivedData] = useState([]),
        [search, updateSearch] = useState('')

    let _apiBase = `https://rickandmortyapi.com/api/character/?name=${search}`;

    useEffect(()=>{
        (async function(){
        let data = await fetch(_apiBase).then(res => res.json())
        updateReceivedData(data)
        })();
    },[_apiBase]);
    
    return(
        <>
            <Title/>
            <SearchPanel updateSearch={updateSearch}/>
            <CharList page='/' characters={receivedData.results}/>
        </>
    
    )
}

export default MainPage