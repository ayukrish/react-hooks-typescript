import React from 'react';
import styled from 'styled-components';

interface CardProps {
  imgSrc: string;
  heading: string;
  dataObj: object;
}

const CardWrapper = styled.article`
  width: 300px;
  margin-bottom: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 0.625rem;
  overflow: hidden;
  background: rgb(51, 51, 51);
`;

const CardHeader = styled.div`
  width: 100%;
  background: black;
  max-width: 300px;
  max-height: 300px;
  position: relative;
`;

const CardInfo = styled.div`
  color: rgb(255, 152, 0);
  padding: 1.25rem;
`;

const CardTitle = styled.div<{ imgSrc: string }>`
  width: 100%;
  opacity: 0.8;
  position: ${(props) => (!props.imgSrc ? 'relative' : 'absolute')};
  bottom: 0px;
  background: ${(props) => (!props.imgSrc ? 'rgb(51, 51, 51)' : 'black')};
  padding: 0.625rem;
  h2 {
    color: white;
    font-size: 1.625rem;
    font-weight: 400;
  }
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
  <CardWrapper className={'flex column'}>
    <CardHeader>
      {imgSrc && <img src={imgSrc} alt={heading} />}
      <CardTitle imgSrc={imgSrc}>
        <h2>{heading}</h2>
      </CardTitle>
    </CardHeader>
    <CardInfo>
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
