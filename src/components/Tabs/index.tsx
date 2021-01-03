import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { tabItems } from './constants';

const TabWrapper = styled.section`
  display: flex;
`;

const Tab = styled.div<{ isActive: boolean; theme: 'light' | 'dark' }>`
  margin: 20px;
  font-size: 18px;
  a {
    color: ${(props) =>
      props.isActive
        ? 'rgb(255, 152, 0)'
        : `${props.theme === 'light' ? '#16161d' : '#fff'}`};
    text-decoration: none;
    &:hover {
      color: rgb(255, 152, 0);
    }
  }
`;

interface tabProps {
  theme: string;
}

const Tabs = ({ theme }: tabProps) => {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].id);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const tabDetails = getActiveTab(currentPath);
    setSelectedTab(tabDetails.id);
  }, [location]);

  const getActiveTab = (route: string) => {
    const index = tabItems.findIndex((item) => item.routePath === route);
    return index === -1 ? tabItems[0] : tabItems[index];
  };

  const getTabItems = () => {
    return (
      tabItems &&
      tabItems.map((item) => (
        <Tab key={item.id} isActive={selectedTab === item.id} theme={theme}>
          <Link to={item.routePath}>{item.name}</Link>
        </Tab>
      ))
    );
  };

  return <TabWrapper>{getTabItems()}</TabWrapper>;
};

export default Tabs;
