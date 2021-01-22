import React from 'react';
import styled, { withTheme } from 'styled-components';

interface ICardProps {
  imgSrc?: string;
  heading: string;
  dataObj: IDataObj;
  theme: { theme: 'light' | 'dark' };
}

interface IDataObj {
  STATUS?: string;
  SPECIES?: string;
  GENDER?: string;
  ORIGIN?: string;
  LOCATION?: string;
  EPISODE?: string;
  'AIR DATE'?: string;
  TYPE?: string;
  DIMENSION?: string;
}

const CardWrapper = styled.article<{ theme: 'light' | 'dark' }>`
  width: 600px;
  max-height: 320px;
  overflow: hidden;
  background: ${(props) =>
    props.theme === 'light' ? '#000' : 'rgb(60, 62, 68)'};
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const CardHeader = styled.div`
  width: 100%;
  flex-basis: 30%;
`;

const CardInfo = styled.div`
  color: rgb(255, 152, 0);
  padding: 1.25rem;
  flex-basis: 70%;
`;

const CardTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: 400;
`;

const CharacterText = styled.div<{ theme: 'light' | 'dark' }>`
  padding: 0.75rem 0px 0.375rem;
  border-bottom: 1px solid rgb(68, 68, 68);

  span {
    width: 100%;
    font-size: 0.9rem;
    font-weight: 200;
    text-align: right;

    &:first-child {
      font-size: 0.7rem;
      font-weight: 400;
      color: ${(props) =>
        props.theme === 'light' ? '#fff' : 'rgb(158, 158, 158)'};
      text-align: left;
    }
  }
`;

const Card: React.FunctionComponent<ICardProps> = ({
  imgSrc = '',
  heading = '',
  dataObj = {},
  theme,
}: ICardProps) => (
  <CardWrapper className="flex row" theme={theme.theme}>
    <CardHeader>
      <img src={imgSrc} alt={heading} />
    </CardHeader>
    <CardInfo>
      <CardTitle>{heading}</CardTitle>
      {Object.entries(dataObj).map(([key, value]) => (
        <CharacterText
          className="flex align-center space-between"
          key={key}
          theme={theme.theme}
        >
          <span>{key}</span>
          <span>{value}</span>
        </CharacterText>
      ))}
    </CardInfo>
  </CardWrapper>
);

export default withTheme(Card);
