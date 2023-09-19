import { useState } from "react";
import styles from "./App.module.css";

const numbers = [
	{ id: 0, number: 0 },
	{ id: 1, number: 1 },
	{ id: 2, number: 2 },
	{ id: 3, number: 3 },
	{ id: 4, number: 4 },
	{ id: 5, number: 5 },
	{ id: 6, number: 6 },
	{ id: 7, number: 7 },
	{ id: 8, number: 8 },
	{ id: 9, number: 9 },
];

function App() {
	const [switchColor, setSwitchColor] = useState(false);

	const [value, setValue] = useState("");
	const onClickResult = () => {
		setSwitchColor(!switchColor);
		setValue(eval(value));
	};
	const onClickPlus = () => {
		setSwitchColor();
		setValue(value + " + ");
	};
	const onClickMinus = () => {
		setSwitchColor();
		setValue(value + " - ");
	};
	return (
		<div className={styles.container}>
			<button onClick={() => setValue("")} className={styles.reset}>
				С
			</button>
			<input
				className={switchColor ? styles.result : styles.input}
				type="text"
				value={value}
			></input>
			<div className={styles.block}>
				{numbers.map(({ id, number }) => (
					<button
						onClick={() => setValue(`${value}${number}`)}
						key={id}
						className={styles.numbers}
					>
						{number}
					</button>
				))}
				<div>
					<button onClick={onClickPlus} className={styles.operator}>
						+
					</button>
					<button onClick={onClickMinus} className={styles.operator}>
						-
					</button>
					<button onClick={onClickResult} className={styles.operator}>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
