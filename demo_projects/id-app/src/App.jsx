import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// layouts
import DashboardLayout from "./layouts/DashboardLayout"
import RootLayout from "./layouts/RootLayout"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Stats from "./pages/Stats"
import Profile from "./pages/Profile"
import IdCard from "./components/IdCard"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
			</Route>
			<Route path="/dashboard" element={<DashboardLayout />}>
				<Route index element={<Stats />} />
				<Route path="profile" element={<Profile />} />
				<Route path="idmanagement" element={<IdCard/>}/>
			</Route>
		</Route>
	)

)


function App() {

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
