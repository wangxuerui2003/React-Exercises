import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar(props) {
	return (
		<nav className='navbar'>
			<Link to="/" id='home-link'>Home</Link>
			<ul>
				<MyLink to="/price" content="Price"></MyLink>
				<MyLink to="/about" content="About"></MyLink>
			</ul>
		</nav>
	)
}

function MyLink(props) {
	// const path = window.location.pathname;
	const resolevedPath = useResolvedPath(props.to)
	const isActive = useMatch({ path: resolevedPath.pathname, end: true })

	return (
		<li className={isActive ? 'current-page' : ''}>
			<Link to={props.to}>{props.content}</Link>
		</li>
	)
}