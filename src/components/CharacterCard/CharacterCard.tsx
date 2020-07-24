import React from 'react';
import { Character } from '../../pages/Home';
import styled from 'styled-components';
import toLower from 'lodash/toLower';

type Props = {
  key: number;
  character: Character;
};

export const CharacterCard: React.FC<Props> = ({ character }: Props) => {
  return (
    <StyledContainer>
      <div>
        <img src={character.image} alt="character" />
      </div>
      <StyledInfoContainer>
        <h2>{character.name}</h2>
        <StyledAlive>
          <StyledAliveStatus
            alive={
              character.status === 'Alive'
                ? 1
                : character.status === 'Dead'
                ? 0
                : 'unknown'
            }
          />
          {toLower(character.status) + ' - ' + toLower(character.species)}
        </StyledAlive>
        <StyledLocation>
          <span>Origin</span>
          {character.origin.name}
        </StyledLocation>
        <StyledLocation>
          <span>Location</span>
          {character.location.name}
        </StyledLocation>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

const StyledLocation = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    font-weight: 600;
    color: inherit;
  }
  margin: 6px 0px 3px 0px;
`;
const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const StyledAlive = styled.span`
  display: flex;
  align-items: center;
`;

const StyledAliveStatus = styled.span`
  ${({ alive }: { alive: number | string }): string => `
    background-color: ${
      alive === 'unknown' ? '#b2b2b2' : alive ? 'green' : 'red'
    };
 `}
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
`;
const StyledContainer = styled.div`
  width: 300px;
  min-height: 465px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: #ededee;
  border-radius: 0.5rem;
  margin: 0.75rem;
  color: #4e4e4e;
  h2 {
    margin: 0;
    margin-bottom: 6px;
  }
`;
