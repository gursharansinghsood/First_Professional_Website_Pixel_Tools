import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import BGRemover from './pages/BGRemover'
import Tools from './pages/Tools'
import { Toaster } from 'react-hot-toast'
import About from './pages/About'
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  
  return (
    <div className='bg-bg'>
      <Toaster position='top-right' />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="/bg-remover" element={<BGRemover />} />
          </Route>
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App