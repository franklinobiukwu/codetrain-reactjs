import { Box } from "@chakra-ui/react"
import Navbar from "../components/general/Navbar"
import { Outlet } from "react-router-dom"

const Index = () =>{
	return (
		<Box>
			<Navbar/>
			<Outlet/>
		</Box>
	)
}

export default Index
