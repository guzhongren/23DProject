/**
 * Created by Guzhongren
 * ../../../router.tsx
 */
import * as React from 'react';
import ReactMapboxGl, {Layer, Feature } from "react-mapbox-gl";
import {Map} from 'mapbox-gl';
export interface Props {
    createdMap?:(map:Map)=>void;
}
export interface Status {

}
let accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
let Mapbox = ReactMapboxGl({
    accessToken:accessToken
});
export class MapboxDemo extends React.Component<Props, Status>{
    mapbox;
    constructor(props: Props, status: Status) {
        super(props, status);
    };
    componentDidMount(){

    };
    // 地图创建完毕
    onCreatedMapbox(map:Map,evt:any){
        // this.mapbox.on("click",(evt) => {
        //     console.log(evt);
        // });
        
        console.log(map.getStyle());
        this.props.createdMap ?this.props.createdMap(map) :null;
    };
    
    refs:{
        [key: string]: any;
        mapbox: any;
    }
    render() {
        let containerStyle = {
            height: "100%",
            width: "100%"
        };
        let mapStyle = "mapbox://styles/mapbox/streets-v9";
        return (
            <Mapbox onStyleLoad= {this.onCreatedMapbox.bind(this)} ref={(map) => {console.log(map)}} containerStyle = {containerStyle} style = {mapStyle}>
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Mapbox>
        )
    }
}