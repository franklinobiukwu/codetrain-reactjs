import './App.css'
import SimpleCard from './pages/SimpleCard'

function App() {

	const data = {
		img: 'https://images.pexels.com/photos/14429453/pexels-photo-14429453.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		title: 'Hya Fire',
		description: 'The Essence of life is fulfilling purpose. Until your start fulfilling your purpose, your are not yet alive'
	}

  return (
    <div className='flex justify-center items-center h-screen'>
	<SimpleCard data={data}/>
    </div>
  )
}

export default App
