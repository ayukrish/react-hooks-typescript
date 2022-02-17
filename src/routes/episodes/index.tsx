import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Card from '../../components/card';

const EpisodeWrapper = styled.section`
  justify-content: space-around;
`;

const GET_EPISODES = gql`
  query {
    episodesByIds(ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      id
      name
      episode
      air_date
    }
  }
`;

const Episodes: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);
  const episodes = data?.episodesByIds || [];
  if (loading) return <div>Loading...</div>;
  if (error) {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <div>Error! {error.message}</div>;
  }
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
    </EpisodeWrapper>
  );
};

export default Episodes;
