import { useState } from "react"

export default function About() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count is {count}</button>
			<h1>About Page</h1>
		</div>
	)
}