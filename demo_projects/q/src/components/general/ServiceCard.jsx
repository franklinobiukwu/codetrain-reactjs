import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Cardpic from "../../assets/hero-img-2.png"

const ServiceCard = (props) => {

	const dashboardBtn = (
				<ButtonGroup spacing={2}>
					<Button
						variant={"solid"}
						colorScheme="red"
					>
						Delete
					</Button>
					<Button
						variant={"ghost"}
						colorScheme="blue"
					>
						Edit
					</Button>
				</ButtonGroup>
	) 

	const visitorBtn = (

				<ButtonGroup spacing={2}>
					<Button
						variant={"solid"}
						colorScheme="red"
					>
						View
					</Button>
					<Button
						variant={"ghost"}
						colorScheme="blue"
					>
						Book
					</Button>
				</ButtonGroup>
	)

	return(
		<Card maxW={"sm"}>
			<CardBody>
				<Image 
					src={Cardpic}
					alt=""
					borderRadius={"lg"}
				/>

			<Stack mt={"6"} spacing={"3"}>
					<Heading>{props.service.title}</Heading>
					<HStack>
						<Text>{props.service.amount}</Text>
						<Box>{props.service.duration}</Box>
					</HStack>
				</Stack>
			</CardBody>
			<Divider/>
			<CardFooter>
				{
					props.dashboard?dashboardBtn:visitorBtn
				}
			</CardFooter>
		</Card>
	)
}
export default ServiceCard
