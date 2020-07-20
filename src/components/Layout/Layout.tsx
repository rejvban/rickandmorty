import React, { ReactNode } from 'react';
import styled from 'styled-components';

// Assets
import logo from '../../assets/logo.svg';

// Components
import { Search } from '../Search';

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <StyledNav>
        <StyledImage src={logo} alt="logo" />
        <StyledText>wubba lubba dub dub</StyledText>
      </StyledNav>
      <Search />
      {children}
    </>
  );
};

const StyledNav = styled.nav`
  ${({ theme }) => `
    background-color: ${theme.colors.whiteSmoke};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
  `}
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  padding: 8px 16px 8px 16px;
`;

const StyledText = styled.span`
  flex: 1;
  text-align: right;
  padding-right: 16px;
  cursor: default;
  font-weight: 600;
  color: #4e4e4e;
`;
