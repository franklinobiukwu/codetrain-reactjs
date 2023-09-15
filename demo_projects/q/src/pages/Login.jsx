import { Box, Button, Container, Divider, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from "@chakra-ui/react"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { Form, Link } from "react-router-dom"

const Login = () =>{

	return (
		<Box bg={"brand.400"} minH={"100vh"}>
			<Container bg={"white"} borderRadius={5}>
				<Form>
					<FormControl
						isRequired
						>
						<FormLabel>Email</FormLabel>
						<InputGroup>
							<InputLeftElement>
								<MdOutlineAlternateEmail/>
							</InputLeftElement>
							<Input
								placeholder="emeka@example.com"
								type="email"
							/>
						</InputGroup>
					</FormControl>

					<FormControl
						isRequired
						mb={5}
						>
						<FormLabel>Password</FormLabel>
						<InputGroup>
							<InputLeftElement>
								<RiLockPasswordFill/>
							</InputLeftElement>
							<Input
								placeholder="********"
								type="password"
							/>
						</InputGroup>
					</FormControl>
				<Button type="submit" mb={7}>Login</Button>
					<Divider/>
					<Box>
						<Text>
						Don't have an account? Register <span> </span>
							<Link to="/signup">here</Link>
						</Text>
					</Box>
				</Form>
			</Container>

		</Box>
	)
}

export default Login
