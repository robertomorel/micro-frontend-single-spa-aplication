/**
 * When this mfe starts, it's already loading all needed components and dependencies.
 * If we change route, for example, by clicking in any other route, nothing more is loaded.
 * Depending on the application, this behavior might consume more time to processing. 
 */
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./components/Root";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
