import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

// Components
import { Layout } from '../../components/Layout';
import { Search } from '../../components/Search';
import { CharacterCard } from '../../components/CharacterCard';
import { _Title } from '../../components/_Title';

interface CharacterVars {
  page: number;
  name: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  image: string;
  __typename: string;
}

interface Information {
  count: number;
  next: number | null;
  prev: number | null;
  __typename: string;
}

interface Data {
  characters: {
    info: Information | null;
    results: Character[] | null;
  };
}

const GET_CHARACTERS = gql`
  query getCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        next
        prev
      }
      results {
        id
        name
        status
        species
        location {
          name
        }
        origin {
          name
        }
        image
      }
    }
  }
`;

export const Home: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const { error, loading, data } = useQuery<Data, CharacterVars>(
    GET_CHARACTERS,
    {
      variables: { page: page, name: keyword ?? '' },
    },
  );

  return (
    <>
      <_Title title="Rick and Morty | Characters" />
      <Layout>
        <Search setKeyword={setKeyword} />
        <StyledContainer>
          {loading && <p>Loading...</p>}
          {!loading && !data && error && <p>No results found...</p>}
          {!loading &&
            data?.characters.results?.map((character: Character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </StyledContainer>
        {!loading && (
          <StyledNavContainer>
            <StyledNav
              disabled={
                page <= 1 || data?.characters.info?.prev === null ? 1 : 0
              }
              onClick={() => setPage((prevState) => prevState - 1)}
              height="512px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
            >
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
            </StyledNav>
            <StyledNav
              disabled={data?.characters.info?.next === null ? 1 : 0}
              onClick={() => setPage((prevState) => prevState + 1)}
              height="512px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
            >
              <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 " />
            </StyledNav>
          </StyledNavContainer>
        )}
      </Layout>
    </>
  );
};

const StyledContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
`;

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px 20px 0px;
`;

const StyledNav = styled.svg`
  width: 32px;
  height: 32px;
  ${({ disabled }: { disabled: number }): string => `
    ${
      disabled
        ? `
        pointer-events: none;
        cursor: default;
        fill: #868484;
    `
        : `
        cursor: pointer;
        fill: #4e4e4e;
        &:hover {
          fill: #333333;
        }
    `
    }
  `}
`;
