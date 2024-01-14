import React from "react";
import styled from "styled-components";

import "./App.scss";
// @ts-ignore
import variableColors from "./_App.module.scss";

const { primaryColor, dangerColor } = variableColors;

const HeaderContainer = styled.div<{ $color: string }>`
  border: 1px solid;
  border-color: ${(props) => props.$color};
  & p.custom-text {
    color: ${dangerColor};
  }
`;

function App(): JSX.Element {
  return (
    <React.Fragment>
      <HeaderContainer $color={primaryColor}>
        <h1 className="text-center">App Header</h1>
        <p className="text-muted">App paragraph - text-muted</p>
        <p className="custom-text">App paragraph - custom-text</p>
      </HeaderContainer>
    </React.Fragment>
  );
}

export default App;
