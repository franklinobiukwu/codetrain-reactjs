import { Avatar, Box, Text, Button, Card, CardBody, CardHeader, Flex, Heading, Spacer, Grid, GridItem, Divider } from "@chakra-ui/react"

const ProfileCardEdu = () => {
	return (
		<Box>
			<Card>
				<CardHeader>
					<Flex>
						<Heading fontSize={"lg"}>Academic</Heading>
					</Flex>
				</CardHeader>
				<Divider borderColor={"gray.300"}/>
				<CardBody>
					<Grid templateColumns={"repeat(6, 1fr)"}>
						<GridItem colSpan={3}>
							<Box mb={5}>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									Program
								</Heading>
								<Text>Software Development</Text>
							</Box>
							<Box>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									Generation
								</Heading>
								<Text>Gen 24</Text>
							</Box>
						</GridItem>
						<GridItem colSpan={3}>
							<Box mb={5}>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									ID Number
								</Heading>
								<Text>023</Text>
							</Box>
							<Box>
								<Heading
									as={"h5"}
									fontWeight={500}
									size={"xs"}
									>
									Session
								</Heading>
								<Text>2022/2023</Text>
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

export default ProfileCardEdu
