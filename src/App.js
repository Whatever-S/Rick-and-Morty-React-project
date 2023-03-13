import MainPage from './pages/MainPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.scss'

function App() {
  let [receivedData, updateReceivedData] = useState([]),
      [search, updateSearch] = useState('')

  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route path='/' element={<MainPage search={search} updateSearch={updateSearch}
					                                   receivedData={receivedData} updateReceivedData={updateReceivedData}/>} />
          <Route path='/:id' element={<CharacterPage/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
