import Relay from 'react-relay'

export default class CreateGame extends Relay.Mutation {

	getVariables() {
		return {
			p1user: this.props.p1user,
			winner: this.props.winner,
			p1Guess: this.props.guess,
			p1GuessCorrect: this.props.guessCorrect
		}
	}

	getMutation () {
		return Relay.QL`mutation{createGame}`
	}

	getFatQuery () {
		return Relay.QL`
			fragment on CreateGamePayload {
				p1user
			}
		`
	}

	getConfigs() {
		return [
			{
				type: 'RANGE_ADD',
				parentName: 'p1user',
				parentId: this.props.p1user.id,
				connectionName: 'p1games',
				edgeName: 'edge',
				rangeBehaviors: {
					'': 'append',
				},
			},
		]
	}

}
