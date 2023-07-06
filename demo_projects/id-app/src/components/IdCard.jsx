import { Avatar, Box, Text, Card, CardBody, CardHeader, Container, Divider, Flex } from "@chakra-ui/react"

const IdCard = () => {
	return(
		<Card>
			<CardHeader>
				<Flex>
					<Avatar name="Codetrain"/>
					<Text>Codetrain</Text>
				</Flex>
			</CardHeader>
			<Divider/>
			<CardBody>
				<Avatar name="Franklin"/>
				<Box>
					<Box>
						<Text>Name</Text>
						Franklin Obiukwu
					</Box>
					<Box>
						<Text>Gender</Text>
						Male
					</Box>
					<Box>
						<Text>Generation</Text>
						Gen 24
					</Box>
					<Box>
						<Text>Student No.</Text>
						023
					</Box>
					<Box>
						<Text>Set</Text>
						2022 - 2023
					</Box>

				</Box>
			</CardBody>
		</Card>
	)
}

export default IdCard
