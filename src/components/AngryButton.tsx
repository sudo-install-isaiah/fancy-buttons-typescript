import { useState } from "react";

export default function AngryButton() {
	const [anger, setAnger] = useState();

	return (
		<button
			style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
			className='AngryButton'
		>
			{anger < 1 && <span>Don't click me too much! </span>}
			{anger > 1 && <span>Rawr!</span>}
		</button>
	);
}
