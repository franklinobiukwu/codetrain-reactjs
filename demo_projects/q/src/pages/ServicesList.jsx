import { Text, Box } from "@chakra-ui/react"

{/*COMPONENTS*/}
import ServiceCard from "../components/general/ServiceCard"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ServicesList = () => {
	const services = useSelector(state=>state.services)
	return (
		<Box>
			{
				services.length != 0? services.map((service)=>{
					return (
						<Box key={service.id}>
							<Link to={`services/${service.id}`}>
								<ServiceCard service={service}/>
							</Link>
						</Box>
					)
					}):(<Text>Sorry, No Services to display</Text>)
			}
		</Box>
	)
}

export default ServicesList
