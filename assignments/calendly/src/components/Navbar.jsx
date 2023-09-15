import { Link, NavLink } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaRegUser } from "react-icons/fa"

const Navbar = () => {
	return (
		<div className="flex justify-between items-center px-6 py-4 border-b">
			<Link to={"/"} className="w-40 overflow-hidden">
				<img src="/img/download.svg" className="w-6/6"/>
			</Link>

			<nav className="font-medium flex gap-4">
				<NavLink to="product" className="hover:text-[#006ce0]">Product</NavLink>
				<NavLink className="flex items-center hover:text-[#006ce0]">
					Solutions 
					<RiArrowDropDownLine className="text-[#006ce0]"/>
				</NavLink>
				<NavLink className="hover:text-[#006ce0]">Teams & Companies</NavLink>
				<NavLink className="hover:text-[#006ce0]">Pricing</NavLink>
				<NavLink className="flex items-center hover:text-[#006ce0]">
					Resources
					<RiArrowDropDownLine className="text-[#006ce0]"/>
				</NavLink>
			</nav>

			<div className="flex items-center gap-2">
				<NavLink><FaRegUser /></NavLink>
				<button className="bg-[#006ce0] px-4 
					py-2 text-white font-medium rounded-lg">Get started</button>
			</div>
		</div>
	)
}


export default Navbar
