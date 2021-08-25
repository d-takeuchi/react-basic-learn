import React, { memo, VFC } from "react";
import styled from "styled-components";

export const Header: VFC = memo(() => {
  return (
    <SContainer>
      <SHeader>
        <h1>Sample App</h1>

        <SHeaderNav>
          <ul>
            <li>ログイン</li>
            <li>新規登録</li>
          </ul>
        </SHeaderNav>
      </SHeader>
    </SContainer>
  );
});

export const SContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SHeaderNav = styled.nav`
  ul {
    display: flex;
    li {
      margin-left: 20px;
    }
  }
`;
