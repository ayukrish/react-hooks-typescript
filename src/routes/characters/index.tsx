import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Card from '../../components/card';
import Pagination from '../../components/pagination';

const CharacterWrapper = styled.section`
  justify-content: space-around;
`;

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        name
        image
        status
        id
        status
        species
        gender
      }
    }
  }
`;

const Characters: React.FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });
  const characters = data?.characters?.results || [];
  if (loading) return <div>Loading...</div>;
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <CharacterWrapper className="flex wrap" data-xpath="characterWrapper">
      {characters?.map((item) => (
        <Card
          key={item.id}
          dataObj={{
            STATUS: item?.status,
            SPECIES: item?.species,
            GENDER: item?.gender,
            ORIGIN: item?.origin?.name,
            LOCATION: item?.location?.name,
          }}
          imgSrc={item?.image}
          heading={item?.name}
        />
      ))}
      <Pagination
        contentLength={characters?.length || 0}
        currentPage={currentPage}
        limit={20}
        onChange={(pageNo) => {
          refetch({
            page: pageNo,
          });
          setCurrentPage(pageNo);
        }}
      />
    </CharacterWrapper>
  );
};

export default Characters;
