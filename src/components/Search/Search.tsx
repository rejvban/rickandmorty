import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styled from 'styled-components';

import Banner from '../../assets/banner.png';
import debounce from 'lodash/debounce';

type Props = {
  setKeyword: Dispatch<SetStateAction<string>>;
};

export const Search: React.FC<Props> = ({ setKeyword }: Props) => {
  const delayedSetter = useCallback(
    debounce(
      (func: Dispatch<SetStateAction<string>>, value: string) =>
        func(() => value),
      500,
    ),
    [],
  );

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    delayedSetter(setKeyword, e.target.value);
  };

  return (
    <SearchWrapper>
      <StyledBanner src={Banner} alt="rick-morty-banner" />
      <SearchBoxWrapper>
        <SearchBar onChange={handleKeyword} placeholder="my name..." />
      </SearchBoxWrapper>
    </SearchWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  position: absolute;
  margin: -7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.input`
  border-radius: 6px;
  border: 0;
  font-size: 20px;
  padding: 10px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  &:focus {
    outline: none;
  }
`;

const SearchWrapper = styled.div`
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
