import { useState } from "react";

export default function TextRepeaterButton() {
	const [reps, setReps] = useState();

	return (
		<button className='TextRepeaterButton'>
			<span>I like this text</span>
		</button>
	);
}
