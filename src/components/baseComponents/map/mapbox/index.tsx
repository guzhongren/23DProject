/**
 * Created by Guzhongren
 * ../../../router.tsx
 */
import * as React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import * as MapboxGl from 'mapbox-gl';
export interface Props {
    mapboxParams: any; // mapbox-gl初始化参数
    mapboxContainerStyle:React.CSSProperties, // mapbox-gl容器样式
    mapboxStyle: string, // mapbox-gl 地图渲染样式
    center?:[number, number],
    onCreatedMap?: (map: MapboxGl.Map) => void,    // 地图创建完毕返回的map
}
export interface States {
    mapboxParams?: any;
    mapboxContainerStyle?:React.CSSProperties,
    mapboxStyle?: string,
    center?:[number, number],
}

export class Mapbox extends React.Component<Props, States>{
    map;
    constructor(props: Props, states: States) {
        super(props, status);
        this.state = {
            mapboxParams: this.props.mapboxParams,
            mapboxContainerStyle: this.props.mapboxContainerStyle,
            mapboxStyle: this.props.mapboxStyle,
            center: this.props.center ? this.props.center: [0,0]
        }
    };
    
    componentDidMount() {

    };
    /**
     * 地图样式接在完毕，返回创建的map
     * 
     * @param {Map} map 
     * @param {*} evt 
     * @memberof MapboxDemo
     */
    onCreatedMapbox(map: MapboxGl.Map, evt: any) {
        // this.mapbox.on("click",(evt) => {
        //     console.log(evt);
        // });
        this.map = map;
        this.addControl(this.map);
        this.props.onCreatedMap ? this.props.onCreatedMap(map) : null;
    };
    /**
     * 添加控件
     * 
     * @param {Map} map 
     * @memberof Mapbox
     */
    addControl(map: MapboxGl.Map) {
        let navigationControl = new MapboxGl.NavigationControl();
        map.addControl(navigationControl, "top-left");
    }

    refs: {
        [key: string]: any;
        mapbox: any;
    }
    render() {
        let MapboxCom = ReactMapboxGl(this.state.mapboxParams);
        return (
            <MapboxCom onStyleLoad={this.onCreatedMapbox.bind(this)} center={this.state.center} containerStyle={this.state.mapboxContainerStyle} style={this.state.mapboxStyle}></MapboxCom>
        )
    }
}