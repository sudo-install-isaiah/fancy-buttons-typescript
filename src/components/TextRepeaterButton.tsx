import { useState } from "react";

export default function TextRepeaterButton() {
	const [reps, setReps] = useState();
	const textArray = [];

	for (let i = 0; i < reps; i++) {
		textArray.push(`<span>I like this text</span>;`);
	}

	return <button className='TextRepeaterButton'>{textArray}</button>;
}
