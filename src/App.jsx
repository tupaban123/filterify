import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Hero from './components/Hero/Hero'
import Reasons from './components/Reasons/Reasons'

import FilterPage from './components/FilterPage/FilterPage'

import './App.css'
import { useState, useEffect } from 'react'
import { refreshToken, loadUsername } from './components/reactRequests.js'

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [openedScreen, setOpenedScreen] = useState('main');
  const [displayName, setDisplayName] = useState('');

  function onLoginClick() {
    window.location.href = 'http://localhost:5000/auth/login'
  }

  function onLogoutClick()
  {
    localStorage.removeItem('spotifyAccessToken');
    setAccessToken(null);
    window.location.href = '';
    openMainScreen();
  }

  function openFilterScreen() {
      setOpenedScreen('filter');
  }

  function openMainScreen() {
    setOpenedScreen('main');
  }

  useEffect(() => {
    async function loadToken() {
      const hash = window.location.hash;
      const token = new URLSearchParams(hash.substring(1)).get('access_token');

      if(token)
      {
        localStorage.setItem('spotifyAccessToken', token);
        window.location.href = '';
      } else {
        var storedAccessToken = localStorage.getItem('spotifyAccessToken')
      
        if(storedAccessToken)
        {
          setAccessToken(storedAccessToken)
          
          const response = await loadUsername(storedAccessToken);

          const result = await response.json();
          console.log(result);

          if(result.error) {
            if(result.status === 401)
            {
              console.log('refreshing...');
              await refreshToken(storedAccessToken)
            }
          } 
          else if(result.display_name) {
            setDisplayName(result.display_name);
          }
        }
      }
    }

    loadToken();
  }, [])

  return (
    <>
      <Header onTitleClick={openMainScreen} onAccountActionClick={accessToken ? onLogoutClick : onLoginClick} isLogged={accessToken} displayName={displayName}/>
      {openedScreen == 'main' && <div className="main-page">
        <Hero onLoginClick={onLoginClick} onFilterClick={openFilterScreen} isLogged={accessToken}/>
        <Reasons />
      </div>}
      { openedScreen == 'filter' && <div className="filter-page">
        <FilterPage/>
      </div>}
      <Footer />
    </>
  )
}

export default App
