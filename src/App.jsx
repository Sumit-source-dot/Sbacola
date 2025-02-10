import ‘./App.css’
import home
import header
import { BrowserRouter, Route, Routes } from ‘react - router - dom’

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path=”/” exact={true} element=
        {<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}



// function App()
// {
// return (
// <BrowserRouter>
// <Header/>
// <Routes>
// <Route path=”/” exact={true} element=
// {<Home/>}/>
// </Routes>
// </BrowserRouter>
// }
// export default App;