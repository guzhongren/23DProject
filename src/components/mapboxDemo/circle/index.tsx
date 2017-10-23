import * as React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import  {Map,Layer } from "mapbox-gl";
import { Button } from "react-bootstrap";
import { Mapbox } from "../../baseComponents/map/mapbox"
export interface Props {
    config: any
}
interface State {
    config?: any,
}
export class CircleDemo extends React.Component<Props, State>{
    map: Map;
    
    constructor(Props) {
        super(Props);
        this.state = {
            config: this.props.config,
        }
    };
    
    componentWillMount() {
    };
    exportMap(map: Map) {
        this.map = map;
        this.addCircleLayer();
    }
    /**
     * 添加circle
     * 
     * @memberof CircleDemo
     */
    addCircleLayer() {
        let _self = this;
        _self.map.setZoom(12);
        _self.map.addLayer({
            'id': 'population',
            'type': 'circle',
            'source': {
                type: 'vector',
                url: 'mapbox://examples.8fgz4egr'
            },
            'source-layer': 'sf2010',
            'paint': {
                // make circles larger as the user zooms from z12 to z22
                'circle-radius': {
                    'base': 1.75,
                    'stops': [[12, 2], [22, 180]]
                },
                // color circles by ethnicity, using data-driven styles
                'circle-color': {
                    property: 'ethnicity',
                    type: 'categorical',
                    stops: [
                        ['White', '#fbb03b'],
                        ['Black', '#223b53'],
                        ['Hispanic', '#e55e5e'],
                        ['Asian', '#3bb2d0'],
                        ['Other', '#ccc']]
                }
            }
        });
        _self.map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
            if (error) throw error;
            _self.map.addImage('cat', image);
            let layer:Layer ={
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-122.447303, 37.753574]
                      },
                      "properties": {
                        "title": "Mapbox DC",
                        "marker-symbol": "monument"
                      }
                    }
                },
                "layout": {
                    "icon-image": "cat",
                    "icon-size": 0.25
                }
            };
            _self.map.addLayer(layer);
        });
    }
    render() {
        return (
            <Mapbox center={this.state.config.center} mapboxParams={this.state.config.mapboxParams} mapboxContainerStyle={this.state.config.containerStyle} mapboxStyle={this.state.config.style} onCreatedMap={this.exportMap.bind(this)}>
                
            </Mapbox>
        )
    }
}
