import { useState } from "react";
import "./BoxGrid.css";
import Box from "./Box";

function BoxGrid({ numBoxes = 9 }) {
	// State
	const [boxes, setBoxes] = useState(Array(numBoxes).fill(false));

	// Function to change State
	function toggleBox(idx) {
		setBoxes((oldBoxes) => {
			return oldBoxes.map((v, i) => {
				if (i === idx) {
					return !v;
				} else {
					return v;
				}
			});
		});
	}

	// Function to Reset State
	function reset() {
		setBoxes(Array(numBoxes).fill(false));
	}

	return (
		<div className='BoxGrid'>
			{boxes.map((b, idx) => (
				<Box
					key={idx}
					isActive={b}
					handleClick={() => toggleBox(idx)}
				/>
			))}

			<div>
				<button onClick={reset}>Reset All</button>
			</div>
		</div>
	);
}

export default BoxGrid;
