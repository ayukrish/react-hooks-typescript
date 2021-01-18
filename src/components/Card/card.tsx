import React from 'react';
import styled from 'styled-components';

interface CardProps {
  imgSrc: string;
  heading: string;
  dataObj: object;
}

const CardWrapper = styled.article`
  width: 600px;
  max-height: 320px;
  overflow: hidden;
  background: rgb(60, 62, 68);
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

const CharacterText = styled.div`
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
      color: rgb(158, 158, 158);
      text-align: left;
    }
  }
`;

const Card = ({ imgSrc = '', heading = '', dataObj = {} }: CardProps) => (
  <CardWrapper className={'flex row'}>
    <CardHeader>{imgSrc && <img src={imgSrc} alt={heading} />}</CardHeader>
    <CardInfo>
      <CardTitle>{heading}</CardTitle>
      {Object.entries(dataObj).map(([key, value]) => (
        <CharacterText className={'flex align-center space-between'} key={key}>
          <span>{key}</span>
          <span>{value}</span>
        </CharacterText>
      ))}
    </CardInfo>
  </CardWrapper>
);

export default Card;
