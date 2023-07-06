import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import DashboardNavbar from "../components/DashboardNavbar"

const DashboardLayout = () => {
	return (
		<Grid templateColumns={'repeat(6, 1fr)'}>
			<GridItem colSpan={1}>
				<Sidebar />
			</GridItem>
			<GridItem colSpan={5}>
				<DashboardNavbar />
				<Outlet />
			</GridItem>
		</Grid>
	)
}

export default DashboardLayout
