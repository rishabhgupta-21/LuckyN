import "./Button.css";

function Button({ text = "Click", handleClick }) {
	return (
		<button
			className='Button'
			onClick={handleClick}
		>
			{text}
		</button>
	);
}

export default Button;
