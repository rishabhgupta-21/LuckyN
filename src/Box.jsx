import "./Box.css";
import { useState } from "react";

function Box({ idx, isActive, handleClick }) {
	return (
		<div
			className='Box'
			style={{ backgroundColor: isActive ? "green" : "red" }}
			onClick={handleClick}
		></div>
	);
}

export default Box;
