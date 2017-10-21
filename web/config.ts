var Config = {
    project: {
        name: "23D一体化研究",
        
    },
    mapbox: {
        mapboxParams:{
            accessToken: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",
        },
        center:[108.9469845742,34.2701623678],
        style:"mapbox://styles/mapbox/streets-v9",
        containerStyle: {height: "100%"}
    },
    apps:{
        circleDemo:{
            mapboxParams:{
                accessToken: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",
            },
            center:[-122.447303, 37.753574],
            style:"mapbox://styles/mapbox/streets-v9",
            containerStyle: {height: "100%"}
        }
    }
}
// 合并外部配置
// if (typeof (ConfigExt) !== 'undefined') {
//     Object.assign(Config, ConfigExt);
// }
export default Config;