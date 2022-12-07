import { useState } from "react";
import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";

function App() {
	const [light, setLight] = useState(false);
	const [anger, setAnger] = useState(0);
	const [clickAmount, setClickAmount] = useState(0);
	const [reps, setReps] = useState(1);

	const repeat = () => {
		setReps(reps + 1);
	};

	const handleClick = () => {
		setClickAmount(clickAmount + 1);
	};

	const rageMore = () => {
		if (anger < 1) {
			setAnger(anger + 0.1);
		} else {
			setAnger(0);
		}
	};

	const dark = light ? "" : "dark";
	const switchLight = () => {
		setLight(light ? false : true);
	};

	return (
		<div className={`App ${dark}`}>
			<h1>Fancy Buttons!</h1>
			<section>
				<AngryButton anger={anger} rageMore={rageMore} />
				<CounterButton clickAmount={clickAmount} handleClick={handleClick} />
				<LightSwitchButton light={light} switchLight={switchLight} />
				<TextRepeaterButton reps={reps} repeat={repeat} />
			</section>
		</div>
	);
}

export default App;
