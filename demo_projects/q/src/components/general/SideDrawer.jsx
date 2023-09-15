import { 
	Text, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, 
	DrawerFooter, DrawerHeader, DrawerOverlay, Wrap,
	WrapItem, Avatar, Button, ButtonGroup, HStack, Box, Textarea, Flex, Spacer 
} from "@chakra-ui/react"
import RequirementForm from "../../components/general/RequirementForm"
import Deliverables from "../../components/service_page/Deliverables"
import { MdOutlinePayments, MdCancel, MdOutlineCheckCircle } from "react-icons/md"


const SideDrawer = (props) => {

	const dashBoardBtns = (
					<ButtonGroup>
						<Button 
							leftIcon={<MdCancel/>}
							colorScheme="red"
						>
							Reject
						</Button>
						<Button 
							leftIcon={<MdOutlineCheckCircle/>}
							colorScheme="blue"
						>
							Accept
						</Button>
					</ButtonGroup>
	)
	const servicesBtns = (
		<Flex width={"100%"}>
			<Text
				fontSize={"lg"}	
				fontWeight={"semibold"}
			>
			$40
			</Text>

			<Spacer/>

			<ButtonGroup>
				<Button 
					leftIcon={<MdCancel/>}
					colorScheme="red"
					>
					Cancel
				</Button>
				<Button 
					leftIcon={<MdOutlinePayments/>}
					colorScheme="blue">
					Pay
				</Button>
			</ButtonGroup>
		</Flex>
	)

	return(
		<Drawer
			onClose={props.onClose}
			placement="right"
			isOpen={props.isOpen}
			size={"lg"}
			finalFocusRef={props.btnRef}
		>
			<DrawerOverlay/>
			<DrawerContent>
				<DrawerCloseButton/>
				<DrawerHeader>
					<Text>Request for Video Editing</Text>
				</DrawerHeader>
				<DrawerBody>	
					<HStack mb={4}>
					<Wrap>
						<WrapItem>
							<Avatar 
								name="Franklin"
								src="https://bit.ly/prosper-baba"
							/>
						</WrapItem>
					</Wrap>
					<Box>
						<Text>Franklin Obiukwu</Text>
						<Text>franklin@gmail.com</Text>
					</Box>
					</HStack>
					
					{/*VARY DISPLAY TYPE*/}
					{(props.isServiceInfo)?(
						/*Render Services Element*/
						<Deliverables/>
						//<RequirementForm/>
					):(
						/*Render Dashboard Element*/
						<Text>This is the Dashboard</Text>
					)}

				</DrawerBody>
				<DrawerFooter
					borderTopWidth={"1px"}
				>
					{(props.isServiceInfo)?(
							servicesBtns
					):(
							dashBoardBtns
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default SideDrawer
