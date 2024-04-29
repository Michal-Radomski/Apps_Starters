import React from "react";
import styled from "styled-components";

import "./App.scss";
import variableColors from "./_App.module.scss";
import { getAddressIP } from "./redux/actions";
import { useAppDispatch } from "./redux/hooks";

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

  // const [
  //   busesFromRedux,
  //   activeBlocksFromRedux,
  //   vehicleSiriData,
  //   loadingTable,
  //   routesDetails,
  //   bearerToken,
  //   mapSettingsFromRedux,
  //   currentCalendar,
  //   scheduleRelationshipTripsArray,
  //   allTripsArray,
  //   busesIds,
  // ]: [
  //   { busesOnTime: BusInfo[]; busesTooFast: BusInfo[]; delayedBuses: BusInfo[]; remainingBuses: BusInfo[] },
  //   ActiveBlock[],
  //   VehicleSiriData[],
  //   boolean,
  //   RouteDetails[],
  //   string,
  //   MapSettings,
  //   CurrentCalendar[],
  //   CancelReenableTrip[],
  //   TripPattern[],
  //   string[]
  // ] = useAppSelector(
  //   (state: RootState) => [
  //     state?.buses,
  //     state?.activeBlocks?.routes,
  //     state?.activeBlocks?.vehicleSiriData,
  //     state?.constantValues?.loadingTable,
  //     state?.routesInfo?.routesInfo,
  //     state?.constantValues?.credentials?.access_token,
  //     state?.constantValues?.mapSettings,
  //     state?.constantValues?.currentCalendar,
  //     state?.buses?.scheduleRelationshipTripsArray,
  //     state?.routesInfo?.allTripsArray,
  //     state?.constantValues?.busesIds,
  //   ],
  //   shallowEqual
  // );

  const [addressIP, setAddressIP] = React.useState<string>("");

  React.useEffect(() => {
    (async function () {
      await fetch(process.env.REACT_APP_Api_URL as string)
        .then((data) => data.json())
        .then((res) => {
          // console.log("res:", res);
          setAddressIP(res?.ip);
        })
        .catch((err) => console.log("err:", err));

      await dispatch(getAddressIP());
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
