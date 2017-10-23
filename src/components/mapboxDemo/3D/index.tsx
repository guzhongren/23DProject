
import * as React from 'react';
import { Mapbox } from "../../baseComponents/map/mapbox";
import  {Map,Layer } from "mapbox-gl";
export interface Props{
    config: any,
}
interface States{
    config?: any,
}
export default class ThreeD extends React.Component<Props, States>{
    map: Map;
    constructor(props:Props, states: States){
        super(props, states);
        this.state={
            config: this.props.config,
        }
    };
    add3D(){
        return new Promise((resolve, reject) => {
            let layers = this.map.getStyle().layers.reverse();
            let labelLayerIndex = layers.findIndex((layer) => {
                return layer.type !== 'symbol';
            });
            let labelLayerId = labelLayerIndex !== -1 ? layers[labelLayerIndex].id : undefined;
            this.map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 10,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': {
                        'type': 'identity',
                        'property': 'height'
                    },
                    'fill-extrusion-base': {
                        'type': 'identity',
                        'property': 'min_height'
                    },
                    'fill-extrusion-opacity': .6
                }
            }, labelLayerId)? resolve(): reject("加载三维出错");

        });
    };
    exportMap(map: Map) {
        this.map = map;
        this.map.setZoom(10);
        this.add3D();
    };

    render(){
        return(
            <Mapbox center={this.state.config.center} mapboxParams={this.state.config.mapboxParams} mapboxContainerStyle={this.state.config.containerStyle} mapboxStyle={this.state.config.style} onCreatedMap={this.exportMap.bind(this)}>  
        </Mapbox>
        )
    }
}