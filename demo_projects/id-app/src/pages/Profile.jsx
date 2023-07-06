import { Box, Container } from "@chakra-ui/react"
import ProfileCard from "../components/ProfileCard"
import ProfileCardEdu from "../components/ProfileCardEdu"

const Profile = () => {
	return (
		<Box bg={"gray.100"} minH={"100vh"}>
			<Container maxW={"980"}>
				<ProfileCard />
				<Box mb={10} />
				<ProfileCardEdu />
			</Container>
		</Box>
	)
}

export default Profile
