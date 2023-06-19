import './App.css'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'
import Info from './components/Info'

function App() {
  return (
      <div className='container'>
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
  )
}

export default App
