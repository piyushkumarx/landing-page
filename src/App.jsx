import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Bar from './component/bar'
import Footer from './component/footer'
import Features from './component/features'
import Home from './component/home'
import Featurepart from './component/featurepart'



function App() {
  const [count, setCount] = useState(0)

  return (
    
   <>
     <Navbar />
      <Home />
     <Features /> 
     <Bar />  
    <Footer />
    </>

    
  )
}

export default App
