import { Box, Button } from "@chakra-ui/react"
import IdCard from "../components/IdCard"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

const IdPage = () => {
	const componentRef = useRef()
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	})

	return(
		<Box>
			<IdCard ref={componentRef} />
			<Button onClick={handlePrint}>Print</Button>
		</Box>
	)
}

export default IdPage
