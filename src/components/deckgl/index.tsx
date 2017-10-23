import * as React from 'react';
// import  from 'react-mapbox-gl';
import MapGL from "mapbox-gl/dist/mapbox-gl.js";
import DeckGL, { LineLayer } from 'deck.gl';
import {Button} from 'antd'
;export interface Props {
    config: any;
}

interface States {
    config?: any
}
export default class DeckGlDemo extends React.Component<Props, States>{
    map: MapGL.Map;
    constructor(props: Props, states: States) {
        super(props, states);
        this.state = {
            config: this.props.config
        };
    };
    exportMap(map:MapGL.Map){
        this.map = map;
    }
    render() {
        const viewport = {
            width: 500,
            height: 500,
            longitude: -100,
            latitude: 40.7,
            zoom: 3,
            pitch: 0,
            bearing: 0
        };
        const data = [
            { sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }
        ];
        return (
            <MapGL {...viewport} width={500} height={500} mapboxApiAccessToken={this.state.config.accessToken}>
                <DeckGL width={500} height={500} {...viewport} layers={[new LineLayer({ id: 'line-layer', data })]} />
            </MapGL>
        )
    }
}