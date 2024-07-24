import React from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import NotFound from './pages/NotFound';
import Success from './pages/Success';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element= {<Home/>}/>
           <Route path='/error' element= {<NotFound/>}/>
           <Route path='/success' element= {<Success/>}/>
           

        </Routes>
        <Toaster/>
    </BrowserRouter>
  )
}

export default App