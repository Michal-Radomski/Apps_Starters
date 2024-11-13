"use client";

import React from "react";

import variableColors from "../styles/_App.module.scss";

const { textColor } = variableColors;

export default function HomePage(): JSX.Element {
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (show) {
      console.log({ show });
    }
  }, [show]);

  return (
    <React.Fragment>
      <h1 style={{ color: textColor, textAlign: "center" }}>HomePage</h1>
    </React.Fragment>
  );
}
