
import * as React from 'react';
// let ReactMapboxGl = require("react-mapbox-gl");
// var Layer = ReactMapboxGl.Layer;
// var Feature = ReactMapboxGl.Feature;
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


export interface Props {

}
export interface Status {

}
export default class MapboxDemo extends React.Component<Props, Status>{
    cap = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
    });
    constructor(props: Props, status: Status) {
        super(props, status);
    }

    render() {
        let accessToken = "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A";
        let containerStyle = {
            height: "100vh",
            width: "100vw"
        };
        let mapStyle = "mapbox://styles/mapbox/streets-v9"
        return (
            <ReactMapboxGl accessToken={accessToken} containerStyle = {containerStyle} style = {mapStyle}>
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </ReactMapboxGl>
        )
    }
}