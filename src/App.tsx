
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import ImagesSlider from './ImagesSlider'

function App() {

  return (
    <div
        className='flex min-h-screen flex-col'
        >
          <Navbar/>
          <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>




    </div>
  )
}

export default App
