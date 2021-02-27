import { registerApplication, start } from "single-spa";
import registrations from '../routes.json'; 

//routes.json
/*
fetch('https://run.mocky.io/v3/b2ed2729-fd28-4a2b-bc5b-987e3e69cc3d')
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen]
      });
    })  
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })
*/  

registrations.applications.forEach(app => {
  registerApplication({
    name: app.name,
    app: () => System.import(app.package),
    activeWhen: app.exact
      ? (location) => location.pathname === app.activeWhen
      : [app.activeWhen]
  });
})

start({
  urlRerouteOnly: true,
});

// All registrations bellow will be replaced by the json in the link "https://run.mocky.io/v3/b2ed2729-fd28-4a2b-bc5b-987e3e69cc3d"
/*
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "@single-spa/welcome"
    ),
  //activeWhen: ["/"], //route
  activeWhen: (location) => location.pathname === '/', //route exact 
});

registerApplication({
  name: "@rm/react-single",
  app: () =>
    System.import(
      "@rm/react-single" // Local mfe
    ),
  //activeWhen: ["/react-single"], //route 
  activeWhen: (location) => location.pathname === '/react-single', //route exact 
});

registerApplication({
  name: "@rm/react-header",
  app: () =>
    System.import(
      "@rm/react-header" // Local mfe
    ),
  activeWhen: ["/"], //route
});

registerApplication({
  name: "@rm/react-multiples",
  app: () =>
    System.import(
      "@rm/react-multiples" // Local mfe
    ),
  activeWhen: ["/react-multiples"], //react app with many routes
});

// The react-parcel was taken off because it will be called inside the react-route project
//registerApplication({
//  name: "@rm/react-parcel",
//  app: () =>
//    System.import(
//      "@rm/react-parcel" // Local mfe
//    ),
//  activeWhen: (location) => location.pathname === '/react-parcel', //route exact
//});

registerApplication({
  name: "@rm/react-route",
  app: () =>
    System.import(
      "@rm/react-route" // Local mfe
    ),
  activeWhen: (location) => location.pathname === '/react-route', //route exact
});

registerApplication({
  name: "@rm/react-lazy",
  app: () =>
    System.import(
      "@rm/react-lazy" // Local mfe
    ),
  activeWhen: ["/react-lazy"], //react app with many routes
});
*/

/**
 * 'start' can mount and unmount all microfronends
 */
//start({
//  urlRerouteOnly: true,
//});
