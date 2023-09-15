import { Box, Button, ButtonGroup, Divider, Flex, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
{/*React Loading Skeleton*/}
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ServiceInfoTop = (props) => {
	return (
		<Box>
			<Grid
				templateRows={'repeat(1, 1fr)'}
				templateColumns={'repeat(6, 1fr)'}
				gap={4}
			>

			<GridItem
					colSpan={'3'}
			>
				<HStack>
					{/*Display Image*/}
						{<Image 
						src="https://bit.ly/dan-abramov" 
						boxSize={'150px'}
						align={"top"}
					/> || <Skeleton count={2}/>}
					{/*Title and Description*/}
					<Box>
						<Box>
							<Text
								fontSize={'2xl'}
							>Video Editing</Text>
							<Flex gap={'3'}>
								<HStack>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStarHalfAlt/>
								</HStack>
								<Text>4/5</Text>
								<Text>200 Reviews</Text>
							</Flex>
						</Box>
						{/*Description*/}
						<Text>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</Text>
						<ButtonGroup>
							<Button 
								leftIcon={<RiMessageFill/>}
								size={"md"} 
								p={4}
								bg={"brand.100"}
								color={"brand.400"}
								shadow={"md"}
							>Message</Button>
							<Button 
								leftIcon={<MdOutlineWork/>}
								size={"md"} 
								p={4}
								bg={"whatsapp.500"}
								color={"brand.400"}
								shadow={"md"}
								ref={props.btnRef}
								onClick={props.triggerClick}
							>Book Service</Button>
						</ButtonGroup>
					</Box>
					{/*COntact Button*/}
				</HStack>

			</GridItem>
				<GridItem 
					colSpan={'3'}
				>
						<Text 
							fontSize={'2xl'}
						>Service Provider Details</Text>
				</GridItem>
			{/*HORIZONTAL DIVIDER*/}
			<GridItem colSpan={'6'}>
				<Divider />
			</GridItem>
			</Grid>
		</Box>
	)
}

export default ServiceInfoTop
