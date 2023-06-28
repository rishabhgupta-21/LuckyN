import "./Dice.css";
import Die from "./Die";

function Dice({ dice, bgcolor }) {
	return (
		<section className='Dice'>
			{dice.map((v, i) => (
				<Die
					key={i}
					value={v}
					bgcolor={bgcolor}
				/>
			))}
		</section>
	);
}

export default Dice;
