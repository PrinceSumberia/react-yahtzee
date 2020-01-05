import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance
} from './Rules';

class ScoreTable extends Component {
	render() {
		const { scores, doScore } = this.props;

		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								score={scores.ones}
								doScore={(evt) => doScore('ones', ones.evalRoll)}
								description={ones.description}
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								doScore={(evt) => doScore('twos', twos.evalRoll)}
								description={twos.description}
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								doScore={(evt) => doScore('threes', threes.evalRoll)}
								description={threes.description}
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								doScore={(evt) => doScore('fours', fours.evalRoll)}
								description={fours.description}
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								doScore={(evt) => doScore('fives', fives.evalRoll)}
								description={fives.description}
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								doScore={(evt) => doScore('sixes', sixes.evalRoll)}
								description={sixes.description}
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								score={scores.threeOfKind}
								doScore={(evt) => doScore('threeOfKind', threeOfKind.evalRoll)}
								description={threeOfKind.description}
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								doScore={(evt) => doScore('fourOfKind', fourOfKind.evalRoll)}
								description={fourOfKind.description}
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								doScore={(evt) => doScore('fullHouse', fullHouse.evalRoll)}
								description={fullHouse.description}
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								doScore={(evt) => doScore('smallStraight', smallStraight.evalRoll)}
								description={smallStraight.description}
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								doScore={(evt) => doScore('largeStraight', largeStraight.evalRoll)}
								description={largeStraight.description}
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								doScore={(evt) => doScore('yahtzee', yahtzee.evalRoll)}
								description={yahtzee.description}
							/>
							<RuleRow
								name="Chance"
								score={scores.chance}
								doScore={(evt) => doScore('chance', chance.evalRoll)}
								description={chance.description}
							/>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
