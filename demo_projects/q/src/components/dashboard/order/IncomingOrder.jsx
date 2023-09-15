import { Box, Text, VStack } from "@chakra-ui/react"
import MessageChip from "../../general/MessageChip.jsx"

const IncomingOrder = () => {
	return(
		<Box>
			<Text>
				No Incoming Order, work harder!
			</Text>
			<VStack
				alignItems={"left"}
			>
			<MessageChip />
			<MessageChip />
			</VStack>
		</Box>
	)
}

export default IncomingOrder
