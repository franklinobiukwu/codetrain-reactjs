import { Avatar, Box, Text, Card, CardBody, CardHeader, Container, Divider, Flex } from "@chakra-ui/react"
import React from "react"

const IdCard = React.forwardRef((props, ref) => {
	return(
		<Card ref={ref} 
			boxShadow={'base'} 
			rounded={"2xl"} 
			overflow={"hidden"} 
			maxW={"500px"} mt={"20"}
		>
			<CardHeader bg={"purple.200"}>
				<Flex>
					<Avatar name="Codetrain"/>
					<Text>Codetrain</Text>
				</Flex>
			</CardHeader>
			<Divider borderColor={"gray.200"}/>
			<CardBody bg={"whitesmoke"}>
				<Avatar name="Franklin"/>
				<Box>
					<Box display={"flex"}>
						<Text>Name</Text>
						Franklin Obiukwu
					</Box>
					<Box display={"flex"}>
						<Text>Gender</Text>
						Male
					</Box>
					<Box display={"flex"}>
						<Text>Generation</Text>
						Gen 24
					</Box>
					<Box display={"flex"}>
						<Text>Student No.</Text>
						023
					</Box>
					<Box display={"flex"}>
						<Text>Set</Text>
						2022 - 2023
					</Box>

				</Box>
			</CardBody>
		</Card>
	)
})

export default IdCard
