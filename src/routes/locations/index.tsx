import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import service from '../../httpService';

const LocationWrapper = styled.section`
  justify-content: space-around;
`;

const Locations: React.FunctionComponent = () => {
  const [locations, setLocations] = useState([]);

  const getData = async (page = 0) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/location',
      method: 'get',
      page,
    });
    setLocations(data?.results || []);
  };

  useEffect(() => {
    getData();
  });

  return (
    <LocationWrapper className="flex wrap">
      {locations.map((item) => (
        <Card
          key={item.id}
          dataObj={{
            TYPE: item?.type,
            DIMENSION: item?.dimension,
          }}
          heading={item?.name}
        />
      ))}
    </LocationWrapper>
  );
};

export default Locations;
