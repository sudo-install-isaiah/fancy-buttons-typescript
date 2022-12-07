import { useState } from "react";
import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";

function App() {
	const [light, setLight] = useState(false);
	const [anger, setAnger] = useState(0);

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
				<CounterButton />
				<LightSwitchButton light={light} switchLight={switchLight} />
				<TextRepeaterButton />
			</section>
		</div>
	);
}

export default App;
