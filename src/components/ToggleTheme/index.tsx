import React from 'react';
import styled from 'styled-components';

interface btnProps {
  themeToggler: any;
  theme: string;
}

const Label = styled.label<{ theme: 'light' | 'dark' }>`
  background: #fff;
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  border: 2px solid
    ${(props) => (props.theme === 'light' ? '#16161d' : 'rgb(255, 152, 0)')};

  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;

  :after {
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    left: ${(props) => (props.theme === 'light' ? '' : '50%')};
    background: ${(props) =>
      props.theme === 'light' ? '#16161d' : 'rgb(255, 152, 0)'};
    border-radius: 2em;
    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Input = styled.input`
  display: none;
`;

const ToggleTheme = ({ themeToggler, theme }: btnProps) => {
  return (
    <>
      <Input id="cb2" type="checkbox" onClick={themeToggler} />
      <Label htmlFor="cb2" theme={theme} />
    </>
  );
};

export default ToggleTheme;
