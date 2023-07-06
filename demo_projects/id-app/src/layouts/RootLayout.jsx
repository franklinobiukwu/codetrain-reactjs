import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { Box } from "@chakra-ui/react"

const RootLayout = () => {
	return (
		<Box>
			<Navbar/>
			<Outlet/>
		</Box>
	)
}

export default RootLayout
