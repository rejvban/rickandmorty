import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

// Components
import { Layout } from '../../components/Layout';
import { Search } from '../../components/Search';
import { CharacterCard } from '../../components/CharacterCard';
import styled from 'styled-components';

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
  const { error, loading, data } = useQuery<Data, CharacterVars>(
    GET_CHARACTERS,
    {
      variables: { page: 1, name: keyword ?? '' },
    },
  );

  return (
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
    </Layout>
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
