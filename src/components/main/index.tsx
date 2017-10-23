import * as React from 'react';
import * as MapboxGl from "mapbox-gl";
import { Button } from "react-bootstrap";
import { Mapbox } from "../baseComponents/map/mapbox";
import "./style/index.less";
export interface Props {
    config: any
}
interface States {
    config?: any,
}
export class Main extends React.Component<Props, States>{
    map: MapboxGl.Map;
    
    constructor(props:Props,state: States) {
        super(props);
        this.state = {
            config: this.props.config,
        }
    };
    
    componentWillMount() {
    };
    exportMap(map: MapboxGl.Map) {

    }
    render() {
        return (
            <Mapbox center={this.state.config.mapbox.center} mapboxParams={this.state.config.mapbox.mapboxParams} mapboxContainerStyle={this.state.config.mapbox.containerStyle} mapboxStyle={this.state.config.mapbox.style} onCreatedMap={this.exportMap.bind(this)}>
                
            </Mapbox>
        )
    }
}