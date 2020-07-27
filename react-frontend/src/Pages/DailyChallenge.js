import React from 'react';
import Game from '../containers/Game';

class DailyChallengePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Game handleLineDirections={this.props.handleLineDirections} LineDirections={this.props.LineDirections} dailyChallengeMode={'Yes'} playerStateList={this.props.playerStateList} savedMoves={this.props.savedMoves} games={this.props.dailyChallengeGameslist} dc_id={this.props.dc_id} highscores={this.props.dchighscores}
             />
        )
    }


}

export default DailyChallengePage;