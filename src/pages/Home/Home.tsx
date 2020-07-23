import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('Data', data);
    console.log('Error', error?.name, error?.extraInfo);
    console.log('Kw', keyword);
  }, [keyword, data, error]);

  return (
    <Layout>
      <Search setKeyword={setKeyword} />
      <StyledContainer>
        {loading && <p>Loading...</p>}
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
