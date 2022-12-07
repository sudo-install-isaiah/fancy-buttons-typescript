type AppProps = {
	light: boolean;
	switchLight: () => void;
};

export default function LightSwitchButton({ light, switchLight }: AppProps) {
	return (
		<button onClick={switchLight} className='LightSwitchButton'>
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
