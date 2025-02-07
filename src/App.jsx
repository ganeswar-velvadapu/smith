import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import People from './pages/People/People'
import News from './pages/News/News'
import Opportunities from './pages/Opportunities/Opportunities'
import Projects from './pages/Projects/Projects'
import Facilities from './pages/Facilities/Facilities'
import Publications from './pages/Publications/Publications'
import Teaching from './pages/Teaching/Teaching'

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[80px]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people' element={<People />} />
          <Route path='/news' element={<News />} />
          <Route path='/opportunities' element={<Opportunities />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/teaching' element={<Teaching />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App