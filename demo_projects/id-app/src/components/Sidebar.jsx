import { Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import {FaChartColumn, FaIdCard, FaScrewdriverWrench, FaUser} from "react-icons/fa6"

const Sidebar = () => {
	return (
		<Box
			bg={"blue.800"}
			color={"white"}
			minH={"100vh"}
			fontSize={"1.2em"}
			p={2} px={4}
			pt={16}
		>
			<List spacing={4}>
				<Box>
					<ListItem>
						<NavLink>
							<ListIcon as={FaChartColumn}/>
							Dashboard
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink to={"profile"}>
							<ListIcon as={FaUser}/>
							Profile
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink to={"idmanagement"}>
							<ListIcon as={FaIdCard}/>
							ID Management
						</NavLink>
					</ListItem>
				</Box>


				<Box>
					<ListItem>
						<NavLink to={"settings"}>
							<ListIcon as={FaScrewdriverWrench}/>
							Settings
						</NavLink>
					</ListItem>
				</Box>
			</List>
		</Box>
	)
}

export default Sidebar
