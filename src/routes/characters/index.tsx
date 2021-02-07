import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import service from '../../httpService';

const CharacterWrapper = styled.section`
  justify-content: space-around;
`;

const Characters: React.FunctionComponent = () => {
  const [characters, setCharacters] = useState([]);

  const getData = async (page = 0) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/character',
      method: 'get',
      page,
    });
    setCharacters(data?.results || []);
  };

  useEffect(() => {
    getData();
  });

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
    </CharacterWrapper>
  );
};

export default Characters;
