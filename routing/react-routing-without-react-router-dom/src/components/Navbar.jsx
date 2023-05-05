import React from 'react';

export default function Navbar(props) {
	return (
		<nav className='navbar'>
			<a href="/" id='home-link'>Home</a>
			<ul>
				<Link href="/price" content="Price"></Link>
				<Link href="/about" content="About"></Link>
			</ul>
		</nav>
	)
}

function Link(props) {
	const path = window.location.pathname;

	return (
		<li className={path == props.href ? 'current-page' : ''}>
			<a href={props.href}>{props.content}</a>
		</li>
	)
}