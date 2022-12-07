type AppProps = {
	clickAmount: number;
	handleClick: () => void;
};
export default function CounterButton({ clickAmount, handleClick }: AppProps) {
	return (
		<button onClick={handleClick} className='CounterButton'>
			You clicked me {clickAmount} amount of times
		</button>
	);
}
