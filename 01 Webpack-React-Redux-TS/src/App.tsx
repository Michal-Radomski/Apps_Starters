import React from "react";
import styled from "styled-components";
import { shallowEqual } from "react-redux";

import "./App.scss";
import variableColors from "./_App.module.scss";
import { getAddressIP } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

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
  const dispatch: Dispatch = useAppDispatch();

  const [fromReduxAddressIP]: [string] = useAppSelector((state: RootState) => [state?.getAddressInfo?.ip], shallowEqual);

  const [addressIP, setAddressIP] = React.useState<string>("");

  React.useEffect(() => {
    setTimeout(() => {
      (async function (): Promise<void> {
        // await fetch(process.env.REACT_APP_Api_URL as string)
        //   .then((data) => data.json())
        //   .then((res) => {
        //     // console.log("res:", res);
        //     setAddressIP(res?.ip);
        //   })
        //   .catch((err) => console.log("err:", err));
        await dispatch(getAddressIP());
      })();
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (fromReduxAddressIP) {
      setAddressIP(fromReduxAddressIP);
    }
  }, [fromReduxAddressIP]);

  return (
    <React.Fragment>
      <HeaderContainer $color={primaryColor}>
        <h1 className="text-center">App Header</h1>
        <p className="text-muted">Paragraph - text-muted</p>
        <p className="custom-text">Paragraph - custom-text</p>
        <div>
          <p>This div has p tag</p>
        </div>
        {addressIP ? (
          <React.Fragment>
            <p className="text-center">{`Your IP address is ${addressIP}`}</p>
          </React.Fragment>
        ) : null}
      </HeaderContainer>
    </React.Fragment>
  );
};

export default App;
