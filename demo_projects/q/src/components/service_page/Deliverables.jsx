import { Box, Text, Textarea } from "@chakra-ui/react"
import { Form } from "react-router-dom"

const Deliverables = () => {
	return (
		<Box>
			<Text 
				fontSize={"lg"}
				fontWeight={"semibold"}
			>Deliverables</Text>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Item 4</li>
			</ul>

			<Form>
				<Text
					fontWeight={"semibold"}
				>Additional Information</Text>

				<Textarea 
					placeholder="e.g. Make the background color blue..."
				/>
			</Form>
		</Box>
	)
}

export default Deliverables
