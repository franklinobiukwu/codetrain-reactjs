import './general.css'
import LoginBtns from "./LoginBtns"
import './Navbar.css'

const Navbar = () => {

	return (
		<div className='flex align-center justify-between px-2 nav-bar'>
			<div className="flex align-center">
				<img src="/images/codtrain-logo.png" alt="codetrain-logo"/>
				<span>Codetrain Africa</span>
			</div>
			<nav className='flex align-center'>
				<ul className='flex px-4 align-center nav--courses'>
					<li>Courses</li>
					<li className='ml-2'>About</li>
				</ul>
				<LoginBtns />
			</nav>
		</div>
	)
}

export default Navbar
