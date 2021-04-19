import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import Pagination from '../../components/pagination';
import service from '../../httpService';

const LocationWrapper = styled.section`
  justify-content: space-around;
`;

const Locations: React.FunctionComponent = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (pageNo = 1) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/location',
      method: 'get',
      page: pageNo,
    });
    setLocations(data?.results || []);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <LocationWrapper className="flex wrap" data-xpath="locationWrapper">
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
      <Pagination
        contentLength={locations?.length || 0}
        currentPage={currentPage}
        limit={20}
        onChange={(pageNo) => {
          setCurrentPage(pageNo);
        }}
      />
    </LocationWrapper>
  );
};

export default Locations;
