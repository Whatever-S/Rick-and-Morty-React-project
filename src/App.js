import MainPage from './pages/MainPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import jwt_decode from 'jwt-decode';

import './App.scss'

function App() {
  let [receivedData, updateReceivedData] = useState([]),
      [search, updateSearch] = useState(''),
      [user, setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:"+ response.credential)
    let userObj = jwt_decode(response.credential);
    console.log(userObj)
    setUser(userObj)
    document.getElementById('signInDiv').hidden = true;
    document.getElementById('signInGreeting').style.visibility = 'visible';
  }

  function handleSignOut(e) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(()=>{
      /* global google */
      google.accounts.id.initialize({
        client_id:
          "681568297864-i3i8kiln8brmnmtriv4emdlcn1oonkta.apps.googleusercontent.com",
          callback: handleCallbackResponse,
      });
  
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
  },[]);


  return (
    <>
    <div className='login'>
      <div id='signInDiv' className='login__sing--in'></div>
        <h3 id='signInGreeting' style={{visibility:'hidden'}} className='login__greeting'>{user.name}</h3>
        {
          Object.keys(user).length !== 0 &&
          <button className='login__singout' onClick={(e) => handleSignOut()}>Sign Out</button>
        }
    </div>
    
    <Router>
      <div className="App container">
        <Routes>
          <Route path='/' element={<MainPage search={search} updateSearch={updateSearch}
					                                   receivedData={receivedData} updateReceivedData={updateReceivedData}/>} />
          <Route path='/:id' element={<CharacterPage/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
