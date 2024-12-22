import './App.css'

import { useEffect, useState } from 'react'

import Home from './pages/Home'
import ThemeSwitcher from './components/ThemeSwitcher'

function App()
{

  const [ darkMode, setDarkMode ] = useState( false )


  const toggleDarkMode = () =>
  {
    setDarkMode( prev => !prev )
  }

  useEffect( () =>
  {
    console.log( darkMode )
    const HTMLDocument = document.querySelector( "#HTML-root" )
    if ( darkMode )
    {
      HTMLDocument.classList.add( 'dark' )
    } else
    {
      HTMLDocument.classList.remove( 'dark' )
    }



  }, [ darkMode ] )


  useEffect( () =>
  {
    const detectSystemMode = () =>
    {
      const HTMLDocument = document.querySelector( "#HTML-root" )
      const isDarkMode = window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches

      if ( isDarkMode )
      {
        HTMLDocument.classList.add( 'dark' )
        console.log( 'dark mode' )
      } else
      {
        HTMLDocument.classList.remove( 'dark' )
        console.log( 'not dark mode' )
      }

    }
    detectSystemMode()
    console.log( 'loggg' )
  }, [] )


  return (
    <div >
      <div className="w-full bg-background py-2">
        <div className='flex flex-row  justify-end' onClick={toggleDarkMode}>
          <ThemeSwitcher />
        </div>
      </div>
      <Home />
    </div>
  )
}

export default App
