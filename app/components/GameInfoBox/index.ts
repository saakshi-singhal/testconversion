/**
 * @author Dmitry Malakhov
 */

import React from 'react';
import PropTypes from 'prop-types';
import { PlayersPropTypes, PlayersDefaultProps } from '../../models/players';
import { ScorePropTypes, ScoreDefaultProps } from '../../models/score';
import UserInfo from './UserInfo';
import GameInfoBoxStyled from './styled/GameInfoBoxStyled';

interface GameInfoBoxProps {
  players: PlayersPropTypes;
  score: ScorePropTypes;
  currentPlayer: number;
}

const GameInfoBox: React.FC<GameInfoBoxProps> = ({ players, score, currentPlayer }) => {
  const usersInformation = players.map((player, index) => (
    <UserInfo
      key={player.name}
      name={player.name}
      score={score.get(index)}
      active={currentPlayer === index}
    />
  ));

  return (
    <GameInfoBoxStyled>
      {usersInformation}
    </GameInfoBoxStyled>
  );
};

GameInfoBox.propTypes = {
  players: PlayersPropTypes,
  score: ScorePropTypes,
  currentPlayer: PropTypes.number,
};

GameInfoBox.defaultProps = {
  players: PlayersDefaultProps,
  score: ScoreDefaultProps,
  currentPlayer: 0,
};

GameInfoBox.displayName = 'GameInfoBox';

export default GameInfoBox;
