import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import AddMyServicesForm from "./AddMyServicesForm"
import { useState } from "react"

const AddMyServicesModal = (props) => {

	return (
		<Box>
			<Modal
				finalFocusRef={props.finalRef}
				isOpen={props.isOpen}
				onClose={props.onClose}
				closeOnOverlayClick={false}
				size={"xl"}
			>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>
						{props.title}
					</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>
						<AddMyServicesForm onClose={props.onClose}/>
					</ModalBody>
					<ModalFooter>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default AddMyServicesModal
