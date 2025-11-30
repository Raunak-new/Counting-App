import React,{useState} from 'react'

function MyComponent(){

	const [name,SetName]= useState("Guest");
	const[age,SetAge]=useState(0)
	const[isEmployed,SetEmpolyed]=useState(false)
	const updateName =( )=> {
		SetName("Raunak");

	}
	const IncrementAge=()=>{
		SetAge(age+3)
	}
	const Employment=()=>{
		SetEmpolyed(!isEmployed)
		}
	
	
	return(
		<div>
			<p> Name : {name}
				</p>
				<button onClick={updateName}>Set Name

				</button>
			<p> Age : {age}
				</p>
				<button onClick={IncrementAge}>Increment Age

				</button>
			<p>Is Employed ? : {isEmployed ?"Yes":"NO"}
				</p>
				<button onClick={Employment}>Check Empolyment Status

				</button>
		</div>
	)


}
export default MyComponent