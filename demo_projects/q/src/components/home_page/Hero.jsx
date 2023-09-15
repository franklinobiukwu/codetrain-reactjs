import { Box, Button, Center, Container, Flex, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react"
import {BiSearch} from "react-icons/bi"
import HeroImg from "../../assets/hero-img-3.png"

const Hero = () => {
	return (
		<Box 
			w={"100vw"}
			p={"0"}
			h={"100vh"}
		>
			<Flex px={5} pt={"2em"}>
				<Box w={"50%"}>
					<Image src={HeroImg}/>
				</Box>
				<Center w={"50%"}>
					<Box>
						<Box 
							textAlign={"center"}
							mb={"5em"}
						>
							<Heading fontSize={"6xl"}>
								Connecting You to <Box as="span" color="brand.400">Quality</Box> Services
							</Heading>
							<Text fontSize={"2xl"}>
								Find the Right Service Providers for Your Needs
							</Text>
						</Box>
						<Center>
						<InputGroup
							maxW={"30em"}
						>
							<InputLeftElement
								style={{top: "50%", transform: "translate(33%, -70%)"}}
							>
								<BiSearch size={"1.5em"} color="#F4F5F7"/>
							</InputLeftElement>
							<Input
								type="search" 
								placeholder="e.g graphic designer..."
								size={"lg"}
								rounded={"3xl"}
								mb={5}
								color={"white"}
								shadow={"md"}
								_focus={{shadow: "sm", borderColor: "gray.300"}}
								style={{
									"color": "white"
									}}
							/>			
						</InputGroup>
						</Center>
						<Center>
							<Button 
								size={"lg"} 
								p={4}
								bg={"brand.400"}
								color={"brand.100"}
								shadow={"md"}
								>
								Search
							</Button>
						</Center>
					</Box>
				</Center>
			</Flex>
		</Box>
	)
}

export default Hero
