import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import Pagination from '../../components/Pagination';
import service from '../../httpService';

const EpisodeWrapper = styled.section`
  justify-content: space-around;
`;

const Episodes: React.FunctionComponent = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (pageNo = 1) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/episode',
      method: 'get',
      page: pageNo,
    });
    setEpisodes(data?.results || []);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <EpisodeWrapper className="flex wrap" data-xpath="episodeWrapper">
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
      <Pagination
        contentLength={episodes?.length || 0}
        currentPage={currentPage}
        limit={20}
        onChange={(pageNo) => {
          setCurrentPage(pageNo);
        }}
      />
    </EpisodeWrapper>
  );
};

export default Episodes;
