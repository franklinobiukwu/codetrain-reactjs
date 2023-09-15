import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'

// templates
import RootTemplate from './templates/RootTemplate'
import Home from './pages/Home'
import Product from './pages/Product'

// pages

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={ <RootTemplate /> }>
			<Route index element={ <Home />}/>
			<Route path="product" element={<Product/>}/>
		</Route>
	)
)

function App() {

  return (
		<>
			<RouterProvider router={router}/>
		</>
  )
}

export default App
