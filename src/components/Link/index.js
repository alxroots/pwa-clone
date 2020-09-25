import React from 'react';
import styled from 'styled-components';

const LinkStyle = styled.a`
  color: #61dafb;
`;


const Link = ({url, title}) => (
  <LinkStyle
    className="app-link"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </LinkStyle>
);

export default Link;