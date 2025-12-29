import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserLayout from './components/layout/userLayout.jsx'
import AdminLayout from './components/layout/adminLayout.jsx'



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>}/>
        <Route path='/admin' element={<AdminLayout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
