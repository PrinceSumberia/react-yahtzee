import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	// ---------------- Without using Arrow Function ---------------
	// constructor(props) {
	// 	super(props);
	// 	this.handleClick = this.handleClick.bind(this);
	// }
	// handleClick() {
	// 	this.props.handleClick(this.props.idx);
	// }
	render() {
		return (
			<button
				className={'Die'}
				style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
				onClick={() => this.props.handleClick(this.props.idx)}
			>
				{this.props.val}
			</button>
		);
	}
}

export default Die;
