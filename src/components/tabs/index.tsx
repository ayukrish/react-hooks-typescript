import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import TabItems from './constants';

interface ITabProps {
  theme: 'light' | 'dark';
}

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

const Tabs: React.FunctionComponent<ITabProps> = ({ theme }: ITabProps) => {
  const [selectedTab, setSelectedTab] = useState(TabItems[0].id);
  const location = useLocation();

  const getActiveTab = (route: string) => {
    const index = TabItems.findIndex((item) => item.routePath === route);
    return index === -1 ? TabItems[0] : TabItems[index];
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const tabDetails = getActiveTab(currentPath);
    setSelectedTab(tabDetails.id);
  }, [location]);

  const getTabItems = () =>
    TabItems.map((item) => (
      <Tab key={item.id} isActive={selectedTab === item.id} theme={theme}>
        <Link data-xpath={`link_${item.id}`} to={item.routePath}>
          {item.name}
        </Link>
      </Tab>
    ));

  return <TabWrapper>{getTabItems()}</TabWrapper>;
};

export default Tabs;
