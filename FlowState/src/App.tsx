import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Login_new'
import Store from './pages/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App