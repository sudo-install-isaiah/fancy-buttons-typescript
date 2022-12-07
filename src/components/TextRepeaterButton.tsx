type AppProps = {
	reps: number;
	repeat: () => void;
};

export default function TextRepeaterButton({ reps, repeat }: AppProps) {
	const textArray: any[] = [];

	for (let i = 0; i < reps; i++) {
		textArray.push(<span key={i}>I like this text </span>);
	}

	return (
		<button onClick={repeat} className='TextRepeaterButton'>
			{textArray}
		</button>
	);
}
