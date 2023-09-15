import { Box, Text, useDisclosure } from "@chakra-ui/react"
import ServiceInfoBottom from "../components/service_page/ServiceInfoBottom"
import ServiceInfoTop from "../components/service_page/ServiceInfoTop"
import SideDrawer from "../components/general/SideDrawer"
import { useRef } from "react"
import { useParams } from "react-router-dom"


const ServiceInfo = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	const {serviceId} = useParams()

	const isServiceInfo = true
	return (
		<Box 
			bg={"brand.400"}
			minH={"100vh"}
		>
			<Text> I am id {serviceId} </Text>
			<ServiceInfoTop 
				btnRef = {btnRef}
				triggerClick={onOpen}
			/>	
			<Text>Hi</Text>
			<ServiceInfoBottom/>
			{/*SIDE DRAWER*/}
			<SideDrawer 
				finalFocusRef = {btnRef}
				onClose={onClose}
				isOpen={isOpen}
				isServiceInfo = {isServiceInfo}
			/>
		</Box>
	)
}

export default ServiceInfo
