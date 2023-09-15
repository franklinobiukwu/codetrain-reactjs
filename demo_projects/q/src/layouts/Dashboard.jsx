import { Box } from "@chakra-ui/react"
import SideNav from "../components/dashboard/SideNav"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<Box display={"grid"} gridTemplateColumns={"20% 80%"}>
			<Box as={"aside"}>
				<SideNav/>	
			</Box>
			<Box as="article" position={"relative"}>
				<Outlet/>
			</Box>
		</Box>
	)
}

export default Dashboard
