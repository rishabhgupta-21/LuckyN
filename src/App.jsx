import "./App.css";
import LuckyN from "./LuckyN";
import { sum } from "./utils";

// Winning Condition Functions
function lessThan7(dice) {
	return sum(dice) < 7;
}

function allSame(dice) {
	return dice.every((value) => value === dice[0]);
}

function App() {
	return (
		<>
			<LuckyN
				title='Sum < 7'
				numDice={3}
				winCheck={lessThan7}
			/>

			<LuckyN
				title='Same Dice!'
				numDice={2}
				winCheck={allSame}
			/>
		</>
	);
}

export default App;
