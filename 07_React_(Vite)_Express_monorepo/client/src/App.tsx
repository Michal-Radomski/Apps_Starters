import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";

import "./styles/App.scss";
import variableColors from "./styles/_App.module.scss";
import { TestI } from "../../common/CommonInterfaces";

const { textColor } = variableColors;

const AppContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 1rem auto auto auto;
  h1 {
    color: ${textColor};
  }
`;

const App = (): JSX.Element => {
  // const testString = process.env.APP_Test_String as string;
  // console.log({ testString });

  //* CommonInterfaces
  const testValue: TestI = {
    value: "test",
  };
  console.log("testValue:", testValue);

  const [testState, setTestState] = React.useState<string>("");

  React.useEffect(() => {
    const apiUrl = "/api/test-route";

    if (testValue?.value) {
      axios
        .get(apiUrl)
        .then(({ data }) => {
          // console.log("data:", data);
          const dataToReturn = data?.testData?.name;
          setTestState(dataToReturn);
        })
        .catch((error) => {
          // console.log("error:", error);
          if (error instanceof Error) {
            console.error("error?.message:", error?.message);
          }
        });
    }
  }, [testValue?.value]);

  return (
    <React.Fragment>
      <AppContainer>
        <h1>React (Vite) Node/Express custom monorepo config in TS</h1>
        <ButtonGroup>
          <button className="btn btn-primary">Button 1</button>
          <Button variant="secondary">Button 2</Button>
        </ButtonGroup>

        <br />
        {testState ? testState : null}
      </AppContainer>
    </React.Fragment>
  );
};

export default App;
