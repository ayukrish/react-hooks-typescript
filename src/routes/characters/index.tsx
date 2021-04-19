import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import Pagination from '../../components/pagination';
import service from '../../httpService';

const CharacterWrapper = styled.section`
  justify-content: space-around;
`;

const Characters: React.FunctionComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (pageNo = 1) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/character',
      method: 'get',
      page: pageNo,
    });
    setCharacters(data?.results || []);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <CharacterWrapper className="flex wrap" data-xpath="characterWrapper">
      {characters.map((item) => (
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
          setCurrentPage(pageNo);
        }}
      />
    </CharacterWrapper>
  );
};

export default Characters;
