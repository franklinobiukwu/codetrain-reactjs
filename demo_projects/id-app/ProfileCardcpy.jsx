import { Avatar, Box, Text, Button, Card, CardBody, CardHeader, Flex, Heading, Spacer, Container, Grid, GridItem } from "@chakra-ui/react"

const ProfileCard = () => {
	return (
		<Box>
			<Heading fontSize={"lg"} mb={2}>Profile</Heading>
			<Card>
				<CardHeader>
					<Flex>
						<Flex gap={4} alignItems={"center"} flexWrap={"wrap"}>
							<Avatar name="Franklin" size={"md"}/>
							<Box>
								<Heading size={"sm"}>Franklin Obiukwu</Heading>
								<Text>email@email.com</Text>
							</Box>
						</Flex>
						<Spacer/>
						<Button colorScheme="green">Edit</Button>
					</Flex>
				</CardHeader>
				<CardBody>
					<Grid templateColumns={"repeat(6, 1fr)"}>
						<GridItem colSpan={3}>
							<Box mb={5}>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									Full Name
								</Heading>
								<Text>Franklin Obiukwu</Text>
							</Box>
							<Box>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									Gender
								</Heading>
								<Text>Male</Text>
							</Box>
						</GridItem>
						<GridItem colSpan={3}>
							<Box mb={5}>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									Nationality
								</Heading>
								<Text>Nigerian</Text>
							</Box>
							<Box>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									Birthday
								</Heading>
								<Text>5th August</Text>
							</Box>
						</GridItem>
					</Grid>
				</CardBody>
			</Card>
			<Card>
			</Card>
		</Box>
	)
}

export default ProfileCard
