import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from "./store/store"
import './index.css'
import { Provider } from 'react-redux'

// PAGES
import App from "./App.jsx"
import ErrorPage from './pages/ErrorPage.jsx'
import ServicesList from './pages/ServicesList'
import Home from "./pages/Home.jsx"
import Index from './pages/Index'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ServiceInfo from './pages/ServiceInfo'

// DASHBOARD PAGES
import Dashboard from './layouts/Dashboard.jsx'
import Services from './pages/Services.jsx'
import Transactions from './pages/Transactions.jsx'
import Order from './pages/Order.jsx'
import Profile from './pages/Profile.jsx'
import Stats from './pages/Stats'


const colors = {
	brand: {
		100: '#007BFF',
		200: '#34C759',
		300: '#FF9500',
		400: '#F4F5F7',
		500: '#333333',
	},
}

const theme = extendTheme({colors})

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index/>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home/>,
			},
			{
				path: "services",
				element: <ServicesList/>,
			},
			{
				path: "services/:serviceId",
				element: <ServiceInfo/>,
			},

		]
	},
	{
		path: "login",
		element: <Login/>
	},
	{
		path: "signup",
		element: <Signup/>
	},
	{
		path: "/dashboard",
		element: <Dashboard/>,
		children: [
			{
				path: "",
				element: <Stats />,
			},
			{
				path: "services",
				element: <Services/>,
			},
			{
				path: "transactions",
				element: <Transactions />,
			},
			{
				path: "order",
				element: <Order />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
		]
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<RouterProvider router={router}/>
			</ChakraProvider>
		</Provider>
  </React.StrictMode>,
)
