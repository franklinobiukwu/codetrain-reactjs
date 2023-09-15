import { Box, IconButton, Text, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import AddMyServicesModal from "../components/dashboard/my_services/AddMyServicesModal"
import ServiceCard from "../components/general/ServiceCard"
import {FaPlusCircle} from "react-icons/fa"
import { useSelector } from "react-redux"

const Services = () => {
	const {isOpen, onOpen, onClose} = useDisclosure()
	const finalRef = useRef(null)

	const services = useSelector(state=>state.services)

	return (
		<Box 
			height={"100vh"}
		>
			<Box>
				<Text fontSize={"3xl"}>
					Services
				</Text>
				<Box>
					{services.map(service=>
						<ServiceCard 
							service={service} 
							dashboard={true}
							key={service.id}
						/>
					)}
				</Box>
				{/*ADD SERVICE MODAL*/}
				<AddMyServicesModal 
					finalRef={finalRef}
					isOpen={isOpen}
					onClose={onClose}
					title="Add new service"
				/>				
			</Box>
			{/*ADD SERVICE BUTTON*/}
			<Box
				position={"fixed"}	
				bottom={"0"}
				right={"0"}
				mx={"10px"}
				my={"10px"}
			>
				<IconButton
					aria-label="add service"
					colorScheme="blue"
					size={"lg"}
					icon={<FaPlusCircle size={"1.5em"}/>}
					boxShadow={"0px 1px 5px #333333"}
					title="add service"
					onClick={onOpen}
				/>
			</Box>
		</Box>
	)
}

export default Services
