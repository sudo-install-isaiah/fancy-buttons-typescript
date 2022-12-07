type AppProps = {
	anger: number;
	rageMore: () => void;
};

export default function AngryButton({ anger, rageMore }: AppProps) {
	return (
		<button
			onClick={rageMore}
			style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
			className='AngryButton'
		>
			{anger < 1 && <span>Don't click me too much! </span>}
			{anger > 1 && <span>Rawr!</span>}
		</button>
	);
}
