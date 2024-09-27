


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StoreNavbar from './components/StoreNavBar'
import List from './components/List'

function App() {


  return (
    <div> 
      <StoreNavbar />
      <BrowserRouter>
      
      <Routes>
        <Route path ="/" element={<List />}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
