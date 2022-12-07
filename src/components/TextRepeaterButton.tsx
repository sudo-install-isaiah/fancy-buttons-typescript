import { useState } from "react";

export default function TextRepeaterButton() {
	const [reps, setReps] = useState(1);
	const textArray: any[] = [];

	const handleClick = () => {
		setReps(reps + 1);
	};

	for (let i = 0; i < reps; i++) {
		textArray.push(<span key={i}>I like this text</span>);
	}

	return <button className='TextRepeaterButton'>{textArray}</button>;
}
