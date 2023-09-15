import LoginBtns from "./LoginBtns"

const Banner = () => {

	return (
		<div className="relative">
			<div className="carousel rounded-box">
				<div className="carousel-item">
					<img src="/images/banner.jpg" alt="codetrain-students"/>
				</div>
			</div>
			<div className="absolute top-0">
				<h1>Join the next generation of Software Engineers
					to build the World</h1>
				<LoginBtns />
			</div>
		</div>
	)
}

export default Banner
