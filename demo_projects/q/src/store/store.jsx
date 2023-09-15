import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../features/service/servicesSlice"

const store = configureStore({
	reducer:servicesReducer,
})

export default store
