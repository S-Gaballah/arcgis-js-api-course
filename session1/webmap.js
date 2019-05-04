
// load webmap
require(["esri/WebMap", "esri/views/MapView", "esri/views/SceneView"], function (WebMap, MapView, SceneView) {
    webmap = new WebMap({
        portalItem: {
            id: "e691172598f04ea8881cd2a4adaa45ba"
        }
    });

    /************************************************************
     * Set the WebMap instance to the map property in a MapView.
     ************************************************************/
    view = new MapView({
        map: webmap,
        container: "viewDiv"
    });
});
