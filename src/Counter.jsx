import React,{useState} from 'react'


function Counter(){
	const[Count,SetCount]=useState(0);

	const Increment=()=>{
		SetCount(Count+1);
		
	}
	const Decrement=()=>{
		SetCount(Count-1);
		
	}
	const Reset=()=>{
		SetCount(0);
		
	}

return(
	<div className="Counter-Container">
		<p className="Counter-Display">

			{Count}
		</p>
			<button className="Counter-Button" onClick={Decrement}>
				Decrement
			</button>
			<button className="Counter-Button" onClick={Reset}>
				Reset
			</button>
			<button className="Counter-Button" onClick={Increment}>
				Increment
			</button>

	</div>
)


}
export default Counter