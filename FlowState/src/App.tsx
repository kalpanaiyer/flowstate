import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Login_new';
import Profile from './pages/Profile.tsx';
import Test from './pages/Test.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />


        
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App