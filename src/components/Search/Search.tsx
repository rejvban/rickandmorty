import React from 'react';
import styled from 'styled-components';

import Banner from '../../assets/banner.png';

export const Search: React.FC = () => {
  return (
    <SearchWrapper>
      <StyledBanner src={Banner} alt="rick-morty-banner" />
      <SearchBox />
    </SearchWrapper>
  );
};

const SearchBox: React.FC = () => {
  return (
    <SearchBoxWrapper>
      <SearchBar />
      <p>Text</p>
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  position: absolute;
  margin: -12px;
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
