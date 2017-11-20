import React, {Component} from 'react';
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'
import Relay from 'react-relay/classic';


class Profile extends Component {

    static defaultProps = {
        user: {
            email: 'user@test.com',
            games: [
                {
                    winner: false,
                    createdAt: '10/25/2016',
                    id: '0001'
                },
                {
                    winner: true,
                    createdAt: '10/26/2016',
                    id: '0002'
                },
                {
                    winner: false,
                    createdAt: '10/27/2016',
                    id: '0003'
                }
            ]
        }
    }

    get records() {
        return this.props.user.games.map( (game, index) => {
            return(
                <GameRecord
                    key={index}
                    index={index}
                >
                    <Column>
                        {(game.winner) ? 'Won!' : "Didn't win"}
                    </Column>
                    <Column>
                        "Robot"
                    </Column>
                    <Column>
                        "Wrong"
                    </Column>
                    <Column>
                        {game.createdAt}
                    </Column>
                </GameRecord>
            )
        })
    }

    render() {
        let {email} = this.props.user
        return (
            <Container>
                <Name>
                    {email}
                </Name>
                <GameList>
                    <GameListHeader>
                        My Games
                    </GameListHeader>
                    <ColumnLabels>
                        <Column>
                            Outcome
                        </Column>
                        <Column>
                            Guessed
                        </Column>
                        <Column>
                            Guessed Correctly
                        </Column>
                        <Column>
                            Date
                        </Column>
                    </ColumnLabels>
                    {this.records}
                </GameList>
            </Container>
        )
    }
}

export default Relay.createContainer(
    Profile, {
        fragments: {
            viewer: () => Relay.QL`
            fragment on Viewer {
                user {
                    id
                }
            }
            `,
        }
    }
)
