import "./Die.css";

export default function Die({ value, bgcolor = "slateblue" }) {
	return (
		<div
			className='Die'
			style={{ backgroundColor: bgcolor }}
		>
			{value}
		</div>
	);
}
