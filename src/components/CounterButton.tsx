import { useState } from "react";

export default function CounterButton() {
	const [clickAmount, setClickAmount] = useState()
	
	return (
		<button className='CounterButton'>You clicked me X amount of times</button>
	);
}
