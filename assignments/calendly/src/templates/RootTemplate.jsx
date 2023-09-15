import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootTemplate = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default RootTemplate
