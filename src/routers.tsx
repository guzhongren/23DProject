/// <reference path="./@types/index.d.ts" />
/**
 * created at 2017-06-08
 * ./index.tsx
 */
import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Config from "./config"
import { Main } from "./components/main";
import { ProjectNavBar } from "./components/navBar";
import { Mapbox } from "./components/baseComponents/map/mapbox";
// import { EsriMapExt } from "./components/baseComponents/map/esriMap";
import { LeafletMap } from "./components/baseComponents/map/leaflet";

// ===demo==
interface State {
  map: any;
}
import { CircleDemo } from "./components/mapboxDemo/circle"

const Index = () => (
  <Router basename="/">
    <div style={{ height: "100%" }}>
      <ProjectNavBar projectConfig={Config.project} />
      <Switch>
        <Route exact path="/" component={MainCom} ></Route>
        <Route path="/circle" component={MapboxDemoList} ></Route>
        {/* <Route path="/circle" component={MapboxDemoList} ></Route> */}
        {/* <Route path="/ags" component={AGS} ></Route> */}
        {<Route component={NoMatch} />}
      </Switch>
    </div>
  </Router>
);
const NoMatch = ({ match }) => {
  <h1>请选择正确的路由。。。</h1>
};
const MapContentHeight = { height: "calc(100% - 56px)" };
const MapboxDemoList = ({ match }) => {
  return (
    <div style={MapContentHeight}>
      <CircleDemo config={Config.apps.circleDemo} />
    </div>
  )
};
const MainCom = ({ match }) => {
  return (
    <div style={MapContentHeight}>
      <Main config={Config} />
    </div>
  )
}


export default Index