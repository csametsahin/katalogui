import React from 'react'
import CustomerLogin from './Customer/CustomerLogin'
import CustomerSignUp from './Customer/CustomerSignUp'
import CustomerPage from './Customer/CustomerPage'
import MainPage from './Main/MainPage'
import Katalog   from './Katalog/Katalog'
import { BrowserRouter as Router,Routes,Route}  from 'react-router-dom'

export default function Home() {
  return (
    <Router>
            <Routes> 
                 <Route exact path='/' element={<MainPage/>}></Route>
                 <Route exact path='/katalog' element={<Katalog/>}></Route>
                 <Route exact path='/portfoliyo' element={<CustomerPage/>}></Route>
                 <Route exact path='/login' element={<CustomerLogin/>}></Route>
                 <Route exact path='/signup' element={< CustomerSignUp />}></Route>
            </Routes>
        </Router>
  )
}
