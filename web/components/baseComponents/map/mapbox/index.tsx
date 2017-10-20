/**
 * Created by Guzhongren
 * ../../../router.tsx
 */
import * as React from 'react';
import ReactMapboxGl, {Layer, Feature } from "react-mapbox-gl";
import {Map, NavigationControl} from 'mapbox-gl';
export interface Props {
    createdMap?:(map:Map)=>void;
}
export interface Status {

}
let accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
let MapboxCom = ReactMapboxGl({
    accessToken:accessToken
});
export class Mapbox extends React.Component<Props, Status>{
    map;
    constructor(props: Props, status: Status) {
        super(props, status);
    };
    componentDidMount(){

    };
    /**
     * 地图样式接在完毕，返回创建的map
     * 
     * @param {Map} map 
     * @param {*} evt 
     * @memberof MapboxDemo
     */
    onCreatedMapbox(map:Map,evt:any){
        // this.mapbox.on("click",(evt) => {
        //     console.log(evt);
        // });
        this.map = map;
        this.addControl(this.map);
        this.props.createdMap ?this.props.createdMap(map) :null;
    };
    /**
     * 添加控件
     * 
     * @param {Map} map 
     * @memberof Mapbox
     */
    addControl(map:Map){
        let navigationControl = new NavigationControl();
        map.addControl(navigationControl,"top-left");
    }
    
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
            <MapboxCom onStyleLoad= {this.onCreatedMapbox.bind(this)} ref={(map) => {console.log(map)}} containerStyle = {containerStyle} style = {mapStyle}>
                {/* <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer> */}
            </MapboxCom>
        )
    }
}