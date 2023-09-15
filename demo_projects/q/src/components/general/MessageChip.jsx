import { Box, Button, Card, CardBody, Divider, Flex, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from "@chakra-ui/react"
import SideDrawer from "./SideDrawer.jsx"
import { useRef } from "react"
import { MdLabel } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"

const MessageChip = () => {
	const {isOpen, onOpen, onClose} = useDisclosure()
	const btnRef = useRef()

	return(
		<Card 
			onClick={onOpen}
			cursor={"pointer"}
		>
			<CardBody
				pt={2}
				pb={2}
			>
				<SideDrawer 
					btnRef = {btnRef}
					onClose = {onClose}
					isOpen = {isOpen}
				/>
				<Flex>
					<Box>
				<HStack gap={"4"}>
					<FaUserCircle size={"1.2em"}/>
					<Text 
						fontSize={"lg"}
						fontWeight={"semibold"}
					>
						Franklin booked a service
					</Text>			
				</HStack>
				<HStack gap={"4"}>
					<MdLabel/>
					<Text>Video editing</Text>			
				</HStack>
				</Box>
					<Spacer />
					<Text fontSize={"xs"}>{new Date().getMinutes()}</Text>
				</Flex>
			</CardBody>
		</Card>
	)
}

export default MessageChip
