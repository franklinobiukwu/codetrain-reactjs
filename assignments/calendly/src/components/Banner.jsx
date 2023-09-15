import { AiOutlineArrowRight } from "react-icons/ai"
import { FaMicrosoft } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"

const Banner = () => {
	
	return (
		<div className="py-12">
			<div className="text-center text-[#0a3559]">
				{/*Calendly Routing*/}
				<Link className="inline-flex gap-2 justify-canter 
					items-center border border-gray-500 
					rounded-full p-1 mb-6 text-sm">
					<button className="bg-[#006ce0] text-white
						rounded-xl px-2 font-semibold text-center">New feature</button>
					<h3>Calendly Routing</h3>
					<AiOutlineArrowRight/>
				</Link>
				{/*Head text*/}
				<h2 className="text-6xl mb-10 font-bold">Easy scheduling ahead</h2>
				<p className="mb-6 text-2xl">Calendly is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time — and so much more.</p>
				<p className="text-xs mb-4">Sign up free with Google or Microsoft.</p>
				<div className="inline-block">
					{/*Button group*/}
					<div className="inline-flex gap-2 mb-4">
						<Link className="flex border 
							border-gray-500 
							rounded-md px-16 
							py-2 gap-2 items-center 
							align-center text-lg">
							<FcGoogle className="text-3xl"/>Google
						</Link>
						<Link className="flex border 
							border-gray-500 
							rounded-md px-16 
							py-2 gap-2 items-center 
							align-center text-lg">
							<FaMicrosoft className="text-3xl text-orange-500"/>Microsoft
						</Link>
					</div>
					{/*Horizontal Line*/}
					<div 
						className="grid grid-cols-11 
						items-center mb-2"
						>
						<div className="col-span-5">
							<hr/>
						</div>

						<div className="col-span-1">
							OR
						</div>

						<div className="col-span-5">
							<hr/>
						</div>
					</div>
					{/*Text below Horizontal line*/}
					<div className="text-sm">
						<Link to={"https://mail.google.com"} 
							className="text-[#006ce0] mr-2 font-semibold">
							Sign up free with email.
						</Link> 
						No credit card required
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
