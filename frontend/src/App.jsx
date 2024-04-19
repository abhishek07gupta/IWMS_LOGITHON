import Header from './components/Header'
import Main from './components/Main'
import Analytics from './components/Main/Analytics'
import Data_entry from './components/Main/Data_entry'
import Data_exit from './components/Main/Data_exit'
import Layout from './components/Main/Layout'
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
        <Header />
        <Routes>
          <Route exact path='/' element={<Main/>}/>
        </Routes>
 
        
      </Router>

    </div>
    
  )
}

export default App
