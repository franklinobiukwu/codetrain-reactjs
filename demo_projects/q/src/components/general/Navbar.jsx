import { Box, Button, ButtonGroup, Container, Flex, Img, Spacer } from "@chakra-ui/react"
import Logo from "../../assets/Q_App-logo_w.png"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<Flex 
			align={"center"}
			pr={5}
			position={"fixed"}
			w={"100vw"}
		>
			<Box w={"80px"}>
				<Img src={Logo}/>
			</Box>
			<Spacer/>
			<ButtonGroup gap={2}>
				<Button bg={"white"} color={"brand.100"}>
					<Link to="/login">Login</Link>
				</Button>
				<Button variant={"ghost"} color={"white"}>
					<Link to="/signup">Signup</Link>
				</Button>
			</ButtonGroup>
		</Flex>
	)
}

export default Navbar
