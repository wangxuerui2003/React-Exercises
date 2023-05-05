import { useState } from "react"

export default function Home() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count is {count}</button>
			<h1>Home Page</h1>
		</div>
	)
}