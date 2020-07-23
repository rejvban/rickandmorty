import React from 'react';
import { Character } from '../../pages/Home';
import styled from 'styled-components';

type Props = {
  key: number;
  character: Character;
};

export const CharacterCard: React.FC<Props> = ({ character }: Props) => {
  return (
    <StyledContainer>
      <h1>{character.name}</h1>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: #ededee;
  border-radius: 0.5rem;
  margin: 0.75rem;
`;
