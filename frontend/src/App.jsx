import Header from './components/Header'
import Main from './components/Main'
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
