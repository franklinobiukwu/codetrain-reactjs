import { Button, ButtonGroup, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea } from "@chakra-ui/react"
import RequirementForm from "../../general/RequirementForm.jsx"
import {TbCurrencyNaira} from "react-icons/tb"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {addService, deleteService} from "../../../features/service/servicesSlice.jsx"

const AddMyServicesForm = (props) => {
	const [title, setTitle] = useState("")
	const [desc, setDesc] = useState("")
	const [deliverables, setDeliverables] = useState("")
	const [duration, setDuration] = useState("")
	const [project, setProject] = useState("")
	const [amount, setAmount] = useState("")

	const serviceDispatch = useDispatch()


	const handleSubmit = (e) =>{
		e.preventDefault()
		const service = {
			title: title,
			desc: desc,
			duration: duration,
			amount: amount
		}
		serviceDispatch(addService(service))
		setTitle("")
		setDesc("")
		setDuration("")
		setAmount("")
		props.onClose()
	}

	return (
		<form
			onSubmit={handleSubmit}
		>
			<FormControl mb={4} isRequired>
				<FormLabel fontWeight={"semibold"}>Title</FormLabel>
				<Input
					placeholder="e.g. Painter..."
					onChange={((e)=>setTitle(e.target.value))}
					value={title}
				/>
			</FormControl>
			<FormControl mb={4} isRequired>
				<FormLabel fontWeight={"semibold"}>Description</FormLabel>
				<Textarea 
					placeholder="Describe your service"
					onChange={(e)=>setDesc(e.target.value)}
					value={desc}
				/>
			</FormControl>
			<FormControl mb={4}>
				<FormLabel fontWeight={"semibold"}>Deliverables (Optional)</FormLabel>
				<RequirementForm
					placeholder="e.g. Paint 2 medium sized bedroom"
					type="text"
				/>
			</FormControl>
			<FormControl mb={4} isRequired>
				<FormLabel fontWeight={"semibold"}>Delivery Duration (in days)</FormLabel>
				<Input
					placeholder="e.g. 3"
					onChange={(e)=>setDuration(e.target.value)}
					value={duration}
					type="number"
				/>
			</FormControl>
			<FormControl mb={4}>
				<FormLabel fontWeight={"semibold"}>Thumbnail</FormLabel>
				<Input
					type="file"
					name="serviceThumbnail"
					accept="image/*"
				/>
			</FormControl>
			<FormControl mb={10}>
				<FormLabel fontWeight={"semibold"}>Project URL (Optional)</FormLabel>
				<RequirementForm
					placeholder="e.g. https://www.youtube.com/watch?v=pX0S"
					type="url"
				/>
			</FormControl>
			<FormControl mb={4} isRequired>
				<FormLabel fontWeight={"semibold"}>Amount</FormLabel>
				<InputGroup>
				<InputLeftElement>
					<TbCurrencyNaira/>
				</InputLeftElement>
				<Input
					placeholder="e.g. 10000"
					onChange={(e)=>setAmount(e.target.value)}
					type="number"
					value={amount}
				/>
				</InputGroup>
			</FormControl>

			<ButtonGroup>
			<Button
				colorScheme="red"
				mr={3}
				onClick={props.onClose}
				>
				Cancel
			</Button>
			<Button
				variant={"ghost"}
				type="submit"
				>
				Add
			</Button>
			</ButtonGroup>
		</form>
	)
}

export default AddMyServicesForm
