import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import IncomingOrder from "../components/dashboard/order/IncomingOrder.jsx"
import OutgoingOrder from "../components/dashboard/order/OutgoingOrder.jsx"
import OngoingOrder from "../components/dashboard/order/OngoingOrder.jsx"
import OrderHistory from "../components/dashboard/order/OrderHistory.jsx"

const Order = () => {
	return (
		<Box>
			<Tabs>
				<TabList>
					<Tab>
						Incoming
					</Tab>
					<Tab>
						Outgoing
					</Tab>
					<Tab>
						Ongoing
					</Tab>
					<Tab>
						History
					</Tab>
				</TabList>
				<TabIndicator/>
				<TabPanels>
					<TabPanel>
						<IncomingOrder/>
					</TabPanel>
					<TabPanel>
						<OutgoingOrder/>
					</TabPanel>
					<TabPanel>
						<OngoingOrder/>
					</TabPanel>
					<TabPanel>
						<OrderHistory />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}
export default Order
