import {} from 'react'; 
import Main from './pages/main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
