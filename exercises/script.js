const { useState } = React;

function Input(props) {
	console.log(props.value);
	return (
		<div>
			<input onChange={props.onChange} value={props.value} />
			<button onClick={props.onClearbtnClick}>x</button>
		</div>
	)
}

function SameValueButton(props) {
	return <button onClick={props.onClick} value={props.value} style={props.style} >{props.value}</button>
}

function DistinctValueButton(props) {
	const [value, setValue] = useState(0);
	return <button value={value} onClick={e => setValue(value + 1)} style={props.style} >{value}</button>
}

function Clock(props) {
	const [time, setTime] = useState(new Date())

	setInterval(() => {
		setTime(new Date()),
			1000
	});

	return <h3>{time.toLocaleTimeString()}</h3>
}

function TitleChanger() {
	const titleNode = document.querySelector('head title');
	const [title, setTitle] = useState(titleNode.innerHTML);
	const changeTitle = (newTitle) => {
		titleNode.innerHTML = newTitle;
	}

	return <input onChange={e => { setTitle(e.target.value); changeTitle(e.target.value) }} value={title} placeholder={title ? '' : "Title changer"} />
}

function App() {
	const [content, setContent] = useState("Hello!");
	const [btnValue, setBtnValue] = useState(0);

	const dbtnArr = [];
	for (let i = 0; i < 3; i++) {
		dbtnArr.push(<DistinctValueButton key={i} style={{ backgroundColor: "green" }} />);
	}

	return (
		<div>
			<div>
				<h1>{content ? content : 'Nothing'}</h1>
				<Input onChange={(e) => setContent(e.target.value)} onClearbtnClick={() => setContent('')} value={content} />
			</div>
			<div style={{ marginTop: 30 }}>
				<SameValueButton value={btnValue} onClick={e => setBtnValue(parseInt(e.target.value) + 1)} />
				<SameValueButton value={btnValue} onClick={e => setBtnValue(parseInt(e.target.value) + 1)} />
				<SameValueButton value={btnValue} onClick={e => setBtnValue(parseInt(e.target.value) + 1)} />
			</div>
			<div style={{ marginTop: 30 }}>
				{
					// <DistinctValueButton />
					// <DistinctValueButton />
					// <DistinctValueButton />
				}
				{
					// dbtnArr.map((elem) => {
					// 	console.log(typeof elem);
					// 	console.log(elem.key);
					// })
				}
				{dbtnArr}
			</div>
			<div>
				<h1>Current Time:</h1>
				<Clock />
			</div>
			<div>
				<TitleChanger />
			</div>
		</div >
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);