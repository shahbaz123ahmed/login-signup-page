

import Login from './Login'
import SignUp  from './SignUp'
import "bootstrap/dist/css/bootstrap.min.css"
// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




const App = () => {

// const [count, setCount] = useState()





  return (

    <BrowserRouter>
    <Routes>
      <Route path='/register' element= {<SignUp/>}></Route>
      <Route path='/Login' element= {<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App