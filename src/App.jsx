import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Reasons from './components/Reasons/Reasons'
import './App.css'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Header />
      <div className="main-page">
        <Hero />
        <Reasons />
      </div>
      {/* <div className="filter-page">
        
      </div> */}
      <Footer />
    </>
  )
}

export default App
