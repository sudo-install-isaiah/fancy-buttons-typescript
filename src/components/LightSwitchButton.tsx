import { useState } from "react";

export default function LightSwitchButton() {
	const [light, setLight] = useState(false);

	return (
		<button className='LightSwitchButton'>
			{light === true && (
				<span className='on'>
					<i>💡</i> I'm on!
				</span>
			)}
			{light === false && (
				<span className='off'>
					<i>💡</i> I'm off!
				</span>
			)}
		</button>
	);
}
