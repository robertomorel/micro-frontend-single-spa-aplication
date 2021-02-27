import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App, // Which component will be rendered?
});

/**
 * - Bootstrap: 
 *  Start to preparing the mfe to be rendered on the page
 *  By creating divs, adding id-roots in these divs
 * - Mount:
 *  Take the results from bootstrap and add the UI and componentes on the paga
 * - Unmount
 *  Remove the DOM
 */
export const { bootstrap, mount, unmount } = lifecycles;
