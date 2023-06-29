import "./LuckyN.css";
import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

function LuckyN({ title = "Lucky Game", numDice = 2, winCheck }) {
	// State
	const [dice, setDice] = useState(getRolls(numDice));

	// Game Winning logic
	const isWinner = winCheck(dice);

	// Roll function
	function roll() {
		setDice(getRolls(numDice));
	}

	return (
		<main className='LuckyN'>
			{/* Heading */}
			<h1>{title}</h1>

			{/* Player 1 */}
			<h2>
				Player 1 {isWinner && <span style={{ color: "green" }}>You win!</span>}
			</h2>
			<Dice dice={dice} />

			{/* Roll Again Button */}
			<Button
				text='Roll again!'
				handleClick={roll}
			/>
		</main>
	);
}

export default LuckyN;
