import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	services: []
}

export const servicesSlice = createSlice({
	name: "Services",
	initialState,
	reducers: {
		addService: (state, action)=>{
			const service = {
				id: nanoid(),
				...action.payload
			}
			state.services.push(service)
		},
		deleteService: (state, action)=>{
			state.services = state.services.filter((info)=>
				info.id != action.payload)
		}
	}

});

export const {addService, deleteService} = servicesSlice.actions
export default servicesSlice.reducer
