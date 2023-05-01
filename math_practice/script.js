const ops = ['+', '-', 'x', '/'];

function operate(num1, num2, op) {
	switch (op) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case 'x':
			return num1 * num2;
		case '/':
			return num1 / num2;
	}
}

function isPrime(num) {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
}

function generateNums(op) {
	if (op !== '/') {
		return [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
	}

	let num1 = Math.floor(Math.random() * 1000) + 1;
	while (isPrime(num1)) {
		num1 = Math.floor(Math.random() * 100) + 1;
	}
	let num2 = Math.floor(Math.random() * 100) + 1;
	while ((!Number.isInteger(num1 / num2)) && (num2 != 1)) {
		num2 = Math.floor(Math.random() * 100) + 1;
	}

	return [num1, num2];
}

function Question() {

	const [state, setState] = React.useState(generateNewQuestion());
	const [correct_ans, setCorrectAns] = React.useState();
	const [score, setScore] = React.useState(0);
	// React.useEffect(() => {
	// 	console.log(state.score)
	// }, [state]);


	function generateNewQuestion() {
		const op = ops[Math.floor(Math.random() * ops.length)];
		const [num1, num2] = generateNums(op);
		return {
			num1: num1,
			num2: num2,
			op: op,
			response: ''
		};
	}

	function checkAnswer(e) {
		const input = parseInt(state.response);
		const ans = operate(state.num1, state.num2, state.op);

		e.preventDefault();
		let audio;
		if (input === ans) {
			audio = new Audio('./assets/correct-soundeffect.mp3');
			setCorrectAns('Correct!');
			setScore(score + 1);
		} else {
			audio = new Audio('./assets/wrong-soundeffect.mp3');
			setCorrectAns(`Answer was: ${ans}`);
		}
		audio.play();
		setState(generateNewQuestion());
	}

	return (
		<>
			<h1>Score: {score}</h1>
			<h2>Question: {state.num1} {state.op} {state.num2}</h2>
			<h4 style={{ color: (correct_ans === 'Correct!' ? 'green' : 'red') }} >{correct_ans}</h4 >
			<form>
				<input onChange={e => { setState({ ...state, response: e.target.value }) }}
					placeholder={state.response ? '' : 'Your answer'}
					value={state.response}
				/>
				<button id="submit-btn" type="submit" onClick={checkAnswer} disabled={state.response ? false : true}>Submit</button>
			</form>
		</>
	);
}

function App() {
	return (
		<div>
			<Question />
		</div>
	);
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);