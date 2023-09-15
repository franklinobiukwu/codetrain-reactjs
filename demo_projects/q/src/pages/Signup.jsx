import { Box, Button, Container, Divider, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { FaUserCircle, FaRegCheckCircle } from "react-icons/fa"
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { Form, Link } from "react-router-dom"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Signup = () =>{

	// FORM FIELD STATES
	const [fname, setFname ] = useState("") //manage first name input field state
	const [validFname, setValidFname] = useState(false) //manage validity state of fist name field
	const [fnameFocus, setFnameFocus] = useState(false) // set focus on first name firld

	const [lname, setLname] = useState("") // manage last name input field state
	const [validLname, setValidLname] = useState(false) // manage validity state of last name field
	const [lnameFocus, setLnameFocus] = useState(false) // set focus on last name field

	const [email, setEmail] = useState("") // manage email input field state
	const [validEmail, setValidEmail] = useState(false) // manage validity state of email field
	const [emailFocus, setEmailFocus] = useState(false) // set focus on email field

	const [pwd, setPwd] = useState("") // manage password input field state
	const [validPwd, setValidPwd] = useState(false) // manage validity state of password field
	const [pwdFocus, setPwdFocus] = useState(false) // set focus on password field

	const [cPwd, setCpwd] = useState("")
	const [validCpwd, setValidCpwd] = useState(false) //manage validity state of confirm password field
	const [cPwdFocus, setCpwdFocus] = useState(false) // set focus on confirm password field

	// REFERENCES TO ELEMENTS
	const fnameRef = useRef() // reference to first name input field
	const errRef = useRef()

	// STATE FOR ERROR AND SUCCESS HANDLING
	const [errMsg, setErrMsg] = useState("")
	const [success, setSuccess] = useState(false)

	// USE EFFECTS TO INDICATE FORM FIELD ERROR OR SUCCESS
	// Set focus on first name field onload
	useEffect(()=>{
		fnameRef.current.focus()
	}, [])
	// Validate / Style Input field indicatng error/success
	useEffect(()=>{
		setValidFname(USER_REGEX.test(fname))
	}, [fname])
	useEffect(()=>{
		setValidLname(USER_REGEX.test(lname))
	}, [lname])

	useEffect(()=>{
		setValidEmail(EMAIL_REGEX.test(email))
	}, [email])
	useEffect(()=>{
		const result = PWD_REGEX.test(pwd)
		setValidPwd(result)
		const match = pwd === cPwd && pwd.length > 0
		setValidCpwd(match)
	}, [pwd, cPwd])


	// CLEAR ERROR MESSAGE IF USER IS TYPING
	useEffect(()=>{
		setErrMsg("")
	}, [fname, lname, email, pwd, cPwd])


	const handleSubmit = async (e) => {
		e.preventDefault()
		// if button was enabled with JS hack
		const vFname = USER_REGEX.test(fname)
		const vLname = USER_REGEX.test(lname)
		const vEmail = USER_REGEX.test(email)
		const vPwd = USER_REGEX.test(pwd)
		if (!vFname || !vLname || !vEmail || !vPwd){
			setErrMsg("Invalid Entry")
			return
		}
	}

	return (
		<Box bg={"brand.400"} minH={"100vh"} className="signup">
			<Container bg={"white"} borderRadius={5}>
				<Text
					ref={errRef}
					className={errMsg? "errmsg":"offscreen"}
					aria-live="assertive"
					bg={"red"}
					color={"green"}
				>{errMsg}</Text>
				<Form onSubmit={handleSubmit}>
					<Text
						ref={errRef}
						aria-live="assertive"
					>{errMsg}</Text>
					<FormControl
						isRequired
						mb={5}
						>
						<FormLabel htmlFor="first_name">First name</FormLabel>
						<InputGroup>
							<InputLeftElement>
								<FaUserCircle/>
							</InputLeftElement>
							<Input
								placeholder="Emeka"
								type="text"
								id="first_name"
								name="fname"
								autoComplete="off"
								ref={fnameRef}
								onChange={(e)=> setFname(e.target.value)}
								onFocus={()=>setFnameFocus(true)}
								onBlur={()=>setFnameFocus(false)}
								aria-invalid={validFname ? "false" : "true"}
								aria-describedby="fnamenote"
							/>
							<InputRightElement>
								{validFname && <FaRegCheckCircle color="green"/>}
							</InputRightElement>
						</InputGroup>
						{
							!validFname && fname.length > 0 &&
								<FormHelperText
									style={{display: "block", color: "red"}}
									id="fnamenote"
							>Must be more than 3 characters</FormHelperText>
						}
					</FormControl>
					<FormControl
						isRequired
						mb={5}
						>
						<FormLabel htmlFor="last_name">Last name</FormLabel>
						<InputGroup>
							<InputLeftElement>
								<FaUserCircle/>
							</InputLeftElement>
							<Input
								placeholder="Segun"
								type="text"
								id="last_name"
								name="lname"
								autoComplete="off"
								onChange={(e)=>setLname(e.target.value)}
								onFocus={()=>setLnameFocus(true)}
								onBlur={()=>setLnameFocus(false)}
								aria-invalid={validLname ? "false" : "true"}
								aria-describedby="lnamenote"
							/>
							<InputRightElement>
								{validLname && <FaRegCheckCircle color="green"/>}
							</InputRightElement>
						</InputGroup>
						{
							!validLname && lname.length > 0 &&
								<FormHelperText
									style={{display: "block", color: "red"}}
									id="lnamenote"
							>Must be more than 3 characters</FormHelperText>
						}
					</FormControl>
					<FormControl
						isRequired
						mb={5}
						>
						<FormLabel htmlFor="email">Email</FormLabel>
						<InputGroup>
							<InputLeftElement>
								<MdEmail/>
							</InputLeftElement>
							<Input
								placeholder="emeka@example.com"
								type="email"
								id="email"
								name="email"
								onChange={e=>setEmail(e.target.value)}
								onFocus={()=>setEmailFocus(true)}
								onBlur={()=>setEmailFocus(false)}
								aria-invalid={validEmail ? "false" : "true"}
								aria-describedby="emailnote"
							/>
							<InputRightElement>
								{validEmail?<FaRegCheckCircle color="green"/>:null}
							</InputRightElement>
						</InputGroup>
						{
							!validEmail && email.length > 0 &&
								<FormHelperText
									style={{display: "block", color: "red"}}
									id="emailnote"
							>Not a valid email address</FormHelperText>
						}
					</FormControl>

					<FormControl
						isRequired
						mb={5}
						>
						<FormLabel htmlFor="password">Password</FormLabel>
						<InputGroup>
							<InputLeftElement>
								<RiLockPasswordFill/>
							</InputLeftElement>
							<Input
								placeholder="********"
								type="password"
								id="pwd"
								name="pwd"
								autoComplete="off"
								onChange={e=>setPwd(e.target.value)}
								onFocus={()=>setPwdFocus(true)}
								onBlur={()=>setPwdFocus(false)}
								aria-invalid={validPwd ? "false" : "true"}
								aria-describedby="passwordnote"
							/>
							<InputRightElement>
								{validPwd?<FaRegCheckCircle color="green"/>:null}
							</InputRightElement>
						</InputGroup>
						{
							!validPwd && pwd.length > 0 &&
								<FormHelperText
									style={{display: "block", color: "red"}}
									id="passwordnote"
							>Password must contain a lowercase letter (a-z) <br/>
							an uppercase letter (A-Z)<br/> and a special character (!@#$%)</FormHelperText>
						}
					</FormControl>
					<FormControl
						isRequired
						mb={5}
						>
						<FormLabel htmlFor="confirm_password">Confirm password</FormLabel>
						<InputGroup>
							<InputLeftElement>
								<RiLockPasswordFill/>
							</InputLeftElement>
							<Input
								placeholder="********"
								type="password"
								id="confirm_password"
								name="cpwd"
								autoComplete="off"
								onChange={e=>setCpwd(e.target.value)}
								onFocus={()=>setCpwdFocus(true)}
								onBlur={()=>setCpwdFocus(false)}
								aria-invalid={validCpwd ? "false" : "true"}
								aria-describedby="cpasswordnote"
							/>
							<InputRightElement>
								{validCpwd && <FaRegCheckCircle color="green"/>}
							</InputRightElement>
						</InputGroup>
						{
							!validCpwd && cPwd.length > 0 &&
								<FormHelperText
									style={{display: "block", color: "red"}}
									id="cpasswordnote"
							>Must match password</FormHelperText>
						}
					</FormControl>
				<Button 
					type="submit" mb={7}
					//colorScheme="blue"
					colorScheme={!validFname || !validLname || !validCpwd || !validEmail ? "gray" : "green"}
					isActive={!validFname || !validLname || !validCpwd || !validEmail ? true : false}
				>Sign up</Button>
					<Divider/>
					<Box>
						<Text>
						Have and account already? Login <span> </span>
							<Link to="/login">here</Link>
						</Text>
					</Box>
				</Form>
			</Container>

		</Box>
	)
}

export default Signup
