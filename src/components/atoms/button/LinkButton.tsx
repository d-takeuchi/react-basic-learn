import React, { memo, ReactNode, VFC } from 'react';

import { Link } from 'react-router-dom';
import styled from "styled-components";

type Props = {
  children : ReactNode;
  path : string;
}

export const LinkButton:VFC<Props> = memo(({children,path}) => {
  return (
    <SLinkButton>
      <Link to={path}>{children}</Link>
    </SLinkButton>
  )
});

const SLinkButton = styled.div`
  border: 1px solid black;
  width: 80px;
  padding: 10px 20px;
  margin: 10px;
  text-align: center;
  a {
    color: black;
  }

`

export const SButtons = styled.div`
  display: flex;
`