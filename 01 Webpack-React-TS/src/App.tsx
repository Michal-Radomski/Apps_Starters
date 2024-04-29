import React from "react";
import styled from "styled-components";

import "./App.scss";
import variableColors from "./_App.module.scss";
import { getAddressIP } from "./redux/actions";

const { primaryColor, dangerColor, warningColor } = variableColors;

const HeaderContainer = styled.div<{ $color: string }>`
  border: 1px solid;
  border-color: ${(props) => props.$color};
  & p.custom-text {
    color: ${dangerColor};
  }
  div:has(p) {
    background-color: ${warningColor};
  }
`;

if (module.hot) {
  module.hot.accept();
}

const App = (): JSX.Element => {
  const [addressIP, setAddressIP] = React.useState<string>("");

  React.useEffect(() => {
    (async function () {
      await fetch("https://api.ipify.org/?format=json")
        .then((data) => data.json())
        .then((res) => {
          // console.log("res:", res);
          setAddressIP(res?.ip);
        })
        .catch((err) => console.log("err:", err));

      await getAddressIP();
      await console.log("test");
    })();
  }, []);

  return (
    <React.Fragment>
      <HeaderContainer $color={primaryColor}>
        <h1 className="text-center">App Header</h1>
        <p className="text-muted">Paragraph - text-muted</p>
        <p className="custom-text">Paragraph - custom-text</p>
        <div>
          <p>This div has p tag</p>
        </div>
        {addressIP ? <React.Fragment>{`Your IP address is ${addressIP}`}</React.Fragment> : null}
      </HeaderContainer>
    </React.Fragment>
  );
};

export default App;
