import { Box } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const SideNav = () => {
	return (
		<Box 
			bg={"#CCCCCC"}
			height={"100vh"}
			position={"fixed"}
		>
			<nav>
				<ul>
					<li
					>
						<NavLink to={"/dashboard"}>Dashboard</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/services"}> My Services </NavLink>
					</li>
					<li>
						<NavLink
							to={"/dashboard/order"}
						> Order </NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/transactions"}>Transactions</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/profile"}>Profile</NavLink>
					</li>
				</ul>
			</nav>
		</Box>
	)
}

export default SideNav
