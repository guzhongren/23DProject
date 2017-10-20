/// <reference path="./@types/index.d.ts" />
/**
 * created at 2017-06-08
 * ./index.tsx
 */
import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Home1 } from "./components/home";
import { ProjectNavBar } from "./components/navBar";
import { Mapbox } from "./components/baseComponents/map/mapbox";
// import { EsriMapExt } from "./components/baseComponents/map/esriMap";
import { LeafletMap } from "./components/baseComponents/map/leaflet";


const Index = () => (
  <Router basename="/">
    <div style={{ height: "100%", width: "100%" }}>
      <ProjectNavBar projectName={"23D一体化研究"} />
      <Route exact path="/" component={Mapbox} ></Route>
      <Route path="/mapbox" component={Mapbox} ></Route>
      {/* <Route path="/ags" component={AGS} ></Route> */}
    </div>
  </Router>
)
const Home = () => (
  <div style={{ width: "100%", height: "calc(100% - 56px)" }}>
    <Mapbox />
  </div>
)
const Test = () => (
  // <Home1 compiler={"ts"} framework={"react"} />
  <Mapbox />
);
// const AGS = () => (
//   <EsriMapExt />
// );


export default Index