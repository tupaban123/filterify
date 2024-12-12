import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Hero from './components/Hero/Hero'
import Reasons from './components/Reasons/Reasons'

import FilterPage from './components/FilterPage/FilterPage'

import './App.css'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    async function test() {
      const response = await fetch('http://localhost:5000/api')
      const data = await response.json();
      alert(`answer from backend: ${data.message}`)
    }

    test();
  }, [])

  return (
    <>
      <Header />
      <div className="main-page">
        <Hero />
        <Reasons />
      </div>
      {/* <div className="filter-page">
        <FilterPage/>
      </div> */}
      <Footer />
    </>
  )
}

export default App
