import Title from "../components/app-title/App-title"
import SearchPanel from "../components/search-panel/Search-panel"
import CharList from "../components/char-list/Char-list"

import { useEffect} from "react";

const MainPage = ({ search, updateSearch, receivedData, updateReceivedData }) =>{
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
            <SearchPanel updateSearch={updateSearch} search={search}/>
            <CharList page='/' characters={receivedData.results}/>
        </>
    
    )
}

export default MainPage