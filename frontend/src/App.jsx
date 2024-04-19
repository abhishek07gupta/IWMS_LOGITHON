import { useState } from 'react'
import Navbar from './components/Navbar'
import Analytics from './components/Analytics'
import Data_entry from './components/Data_entry'
import Data_exit from './components/Data_exit'
import Layout from './components/Layout'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Analytics/>}/>
          <Route exact path='/Analytics' element={<Analytics/>}/>
          <Route exact path='/Data_entry' element={<Data_entry/>}/>
          <Route exact path='/Data_exit' element={<Data_exit/>}/>
          <Route exact path='/Layout' element={<Layout/>}/>
        </Routes>
 
        
      </Router>

    </div>
    
  )
}

export default App
