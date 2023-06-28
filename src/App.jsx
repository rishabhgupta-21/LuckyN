import "./App.css";
// import Lucky7 from "./Lucky7";
import LuckyN from "./LuckyN";

function App() {
	return (
		<>
			{/* <Lucky7 /> */}

			{/* <LuckyN /> */}

			<LuckyN
				numDice={3}
				target={11}
			/>
		</>
	);
}

export default App;
