import { Routes, Route } from 'react-router-dom';

import Login from './pages/login/login.js'
import Home from './pages/home/home.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
