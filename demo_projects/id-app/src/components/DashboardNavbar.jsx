import React from "react"
import { Avatar, 
	Button, 
	Drawer, 
	DrawerBody, 
	DrawerContent,
	DrawerHeader,
	Flex,
	Heading,
	List,
	Text,
	ListIcon,
	ListItem,
	DrawerOverlay,
	useDisclosure,
	DrawerCloseButton,
	DrawerFooter,
	Link,
} from "@chakra-ui/react"

import { FaFileArrowDown, FaLinkedinIn, FaSlack, FaTwitter, FaUserLock, FaUserPen } from "react-icons/fa6"

const DashboardNavbar = () => {

	const { isOpen, onOpen, onClose} = useDisclosure()
	const btnRef = React.useRef()

	return (
		<Flex justifyContent={"flex-end"} p={"10px"} bg={"gray.100"}>
			<Avatar name="Franklin" ref={btnRef} onClick={onOpen} cursor={"pointer"}/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader
						bg={"blue.100"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						mb={"20px"}
						borderBottomRadius={"xl"}
					>
						<Avatar size={"xl"} name="Franklin" mb={"10px"}/>
						<Heading fontSize={"2xl"}>Franklin Obiukwu</Heading>
						<Text fontSize={"md"}>email@email.com</Text>
						<Text fontSize={"lg"}>User ID: 243091</Text>
						<Button colorScheme="red">Log Out</Button>
					</DrawerHeader>
					<DrawerBody>
						<Heading as={"h3"} fontSize={"md"}>QUICK HELP</Heading>
						<List>
							<ListItem>
								<ListIcon as={FaUserPen}/>
								Meet Instructor
							</ListItem>
							<ListItem>
								<ListIcon as={FaUserLock}/>
								Meet Admin
							</ListItem>
							<ListItem>
								<ListIcon as={FaFileArrowDown}/>
								Download Curriculum
							</ListItem>
						</List>
					</DrawerBody>
					<DrawerFooter>
						<Link><FaTwitter /></Link>
						<Link><FaSlack /></Link>
						<Link><FaLinkedinIn /></Link>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>

	)
}

export default DashboardNavbar
