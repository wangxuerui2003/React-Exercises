import { useState } from "react"

export default function Price() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Price Page</h1>
			<button onClick={() => setCount(count + 1)}>Count is {count}</button>
		</div>
	)
}