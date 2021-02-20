import React from 'react';
import styled, { withTheme } from 'styled-components';

interface IPaginationProps {
  contentLength: number;
  currentPage: number;
  limit: number;
  onChange: (currentPage: number) => void;
  theme: { theme: 'light' | 'dark' };
}

const PaginationWrapper = styled.div<{ theme: 'light' | 'dark' }>`
  width: 100%;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    cursor: pointer;
    padding: 16px 20px;
    background: transparent;
    margin: 0;
    background: ${(props) =>
      props.theme === 'light' ? '#fff' : 'transparent'};
    border: 1px solid
      ${(props) => (props.theme === 'light' ? '#000' : 'rgb(255, 152, 0)')};
    color: ${(props) =>
      props.theme === 'light' ? '#000' : 'rgb(255, 152, 0)'};
    margin-right: 20px;
    &:disabled {
      cursor: not-allowed;
      color: rgb(170, 170, 170);
      border: 1px solid rgb(170, 170, 170);
    }
    &:focus {
      outline: none;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Pagination: React.FunctionComponent<IPaginationProps> = ({
  contentLength,
  currentPage,
  limit,
  onChange,
  theme,
}: IPaginationProps) => {
  const showPagination = contentLength <= limit;
  return (
    <PaginationWrapper className="flex" theme={theme.theme}>
      {showPagination && (
        <>
          <button
            type="button"
            id="prev"
            disabled={currentPage === 1}
            onClick={(event) => {
              event.stopPropagation();
              onChange(currentPage - 1);
            }}
            data-xpath="pagination_prevBtn"
          >
            Prev
          </button>
          <button
            type="button"
            id="next"
            disabled={contentLength < limit}
            onClick={(event) => {
              event.stopPropagation();
              onChange(currentPage + 1);
            }}
            data-xpath="pagination_nextBtn"
          >
            Next
          </button>
        </>
      )}
    </PaginationWrapper>
  );
};

export default withTheme(Pagination);
