import { NavLink } from "react-router-dom"
import { FaCircleArrowRight, FaCirclePlus } from "react-icons/fa6";
import { Avatar, Box, Button, Flex, HStack, List, ListItem, Spacer } from "@chakra-ui/react"

const Navbar = () => {
	return (
		<Flex bg="blue.800" color={"white"} px={10} py={1}>
			<Avatar name="Codetrain"/>
			<Spacer />
			<Flex as={"nav"}>
				<HStack spacing={50}>
					<List color={"white"} display={"flex"} gap={5}>
						<ListItem>
							<NavLink to={"/"}>Home</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to={"/about"}>About</NavLink>
						</ListItem>
					</List>

					<HStack>
						<Button
							rightIcon={<FaCirclePlus/>}
							size={"sm"}
							colorScheme="green"
							>
							Signup
						</Button>
						<Button
							rightIcon={<FaCircleArrowRight/>}
							size={"sm"}
							>
							Login
						</Button>
					</HStack>
				</HStack>
			</Flex>
		</Flex>
	)
}

export default Navbar
