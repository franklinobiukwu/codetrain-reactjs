import { Box } from "@chakra-ui/react"
import Hero from "../components/home_page/Hero"
import ServicesList from "../pages/ServicesList.jsx"

const Home = () => {
	return (
		<Box w={"100vw"} bg={"#2573e8"}>
			<Hero/>
			<ServicesList />
		</Box>
	)
}

export default Home
