import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './components/data'

function App() {
const card = data.map(item=>{
        return <Card 
                status = {item.status}
                rate = {item.rate}
                reviewCount = {item.reviewCount}
                country={item.country}
                img={item.img}
                title={item.title}
                price={item.price}
                />
})

  return (
    <>
          <Navbar />
          <Hero />
          {card}
    </>
  )
}

export default App
