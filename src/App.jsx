import './App.css'
import Home from './Pages/Home/index'
import Header from './Components/Header/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div className='app-container mx-auto'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}



