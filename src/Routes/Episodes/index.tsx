import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/card';
import service from '../../httpService';

const EpisodeWrapper = styled.section`
  justify-content: space-around;
`;

const Episodes: React.FunctionComponent = () => {
  const [episodes, setEpisodes] = useState([]);

  const getData = async (page = 0) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/episode',
      method: 'get',
      page,
    });
    setEpisodes(data?.results || []);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <EpisodeWrapper className="flex wrap">
      {episodes.map((item) => (
        <Card
          key={item.id}
          dataObj={{
            EPISODE: item?.episode,
            'AIR DATE': item?.air_date,
          }}
          heading={item?.name}
        />
      ))}
    </EpisodeWrapper>
  );
};

export default Episodes;
