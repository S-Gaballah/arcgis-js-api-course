// Syncronize views
require(["esri/Map", "esri/views/MapView", "esri/views/SceneView"], function (Map, MapView, SceneView) {

    let sceneViewMap = new Map({
        basemap: "satellite"
    });

    let mapViewMap = new Map({
        basemap: "topo"
    });

    let sceneView = new SceneView({
        id: "view1",
        container: "view1Div",
        map: sceneViewMap
    });

    let mapView = new MapView({
        id: "view2",
        container: "view2Div",
        map: mapViewMap,
        constraints: {
            // Disable zoom snapping to get the best synchronization
            snapToZoom: false
        }
    });
    
    let sceneViewWatcher;
    let mapViewWatcher;
    sceneView.when(function () {

        sceneView.watch("animation, interacting", (newValue, oldValue, property, y) => {
            if (!newValue) {
                sceneViewWatcher && sceneViewWatcher.remove();
                return;
            }

            sceneViewWatcher = sceneView.watch("extent", (newValue, oldValue, property, y) => {
                mapView.extent = newValue;
                console.log("set mapView")
            });
        });

    });


    mapView.when(function () {
        mapView.watch("animation, interacting", (newValue, oldValue, property, y) => {
            if (!newValue) {
                mapViewWatcher && mapViewWatcher.remove();
                return;
            }
            mapViewWatcher = mapView.watch("extent", (newValue, oldValue, property, y) => {
                sceneView.extent = newValue;
                console.log("set sceneView")
            });
        });
    });







});

