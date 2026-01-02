import { useState } from 'react'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import PropertyList from './components/PropertyList.jsx'
import Search from './components/Search.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
        <Intro />
        <Search />
        <PropertyList />
        <Footer />
        
    </>
  )
}

export default App
