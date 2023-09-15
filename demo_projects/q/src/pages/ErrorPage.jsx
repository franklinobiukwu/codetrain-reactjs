import { Box, Center, Text } from "@chakra-ui/react"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
	const error = useRouteError()
	return (
		<Box>
			<Center h={"100vh"} w={"100vw"} bg={"brand.100"} flexDirection={"column"}>
				<Text size={"2xl"} fontSize={"2xl"}>
					Sorry Uncle, the dimention you
					want to ascend to cannot be found.
				</Text>
				<Text>
					{error.statusText || error.message}
				</Text>
			</Center>
		</Box>
	)
}

export default ErrorPage
