import React, {Component} from 'react';
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'


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
                </GameList>
            </Container>
        )
    }
}

export default Profile;
