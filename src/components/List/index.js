import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightGrey;
`;

const UlStyled = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

const LiStyled = styled.li`
  display: flex;
  justify-content: space-between;
`;

const LabelStyled = styled.span`
  font-weight: bold;
`;


const List = ({items, title}) => (
  <>
  <TitleStyled>{title}</TitleStyled>
  <UlStyled>
    {items.map(item =>
      <LiStyled key={item.label}>
        <LabelStyled>{item.label}</LabelStyled>
        {item.value}
      </LiStyled>
    )}
  </UlStyled>
  </>
);

export default List;