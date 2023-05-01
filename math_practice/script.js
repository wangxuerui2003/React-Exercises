const ops = ['+', '-', 'x'];

function operate(num1, num2, op) {
	let ans = num1;

	switch (op) {
		case '+':
			ans += num2
			break;
		case '-':
			ans -= num2;
			break;
		case 'x':
			ans *= num2
			break;
	}
	return ans;
}

function Question() {

	const [state, setState] = React.useState({
		score: 0,
		num1: Math.floor(Math.random() * 100) + 1,
		num2: Math.floor(Math.random() * 100) + 1,
		op: ops[Math.floor(Math.random() * ops.length)],
		response: ''
	});
	// React.useEffect(() => {
	// 	console.log(state.score)
	// }, [state]);

	function generateNewQuestion(correct) {
		setState({
			...state,
			score: state.score + 1,
			num1: Math.floor(Math.random() * 100) + 1,
			num2: Math.floor(Math.random() * 100) + 1,
			op: ops[Math.floor(Math.random() * ops.length)],
			response: ''
		})
	}

	function checkAnswer(e) {
		const input = parseInt(state.response);
		const ans = operate(state.num1, state.num2, state.op);
		let correct = false;

		e.preventDefault();
		if (input === ans) {
			console.log('correct!');
			console.log(input, ans);
			correct = true;
			// setState({
			// 	...state,
			// 	score: state.score + 1
			// });
			// console.log(state);
		}
		generateNewQuestion(correct);
	}

	return (
		<>
			<h1>Score: {state.score}</h1>
			<h2>{state.num1} {state.op} {state.num2}</h2>
			<form action="">
				<input onChange={e => { setState({ ...state, response: e.target.value }) }}
					placeholder={state.response ? '' : 'Your answer'}
					value={state.response}
				/>
				<button type="submit" onClick={checkAnswer} disabled={state.response ? false : true}>Submit</button>
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