import MainPage from './pages/MainPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.scss'




function App() {
  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/:id' element={<CharacterPage/>} />
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
