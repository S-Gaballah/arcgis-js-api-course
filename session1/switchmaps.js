
//Switch maps
require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
    // to konow available basemaps 
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap


    let topoMap = new Map({
        basemap: "topo"
    });
    
    let grayMap = new Map({
        basemap: "dark-gray"
    });
    
    view = new MapView({
        container: "viewDiv",
        map: topoMap,
        center: [28.921640459526053, 26.99841482028868],
        zoom: 6
    });
    
    let btnTopo = document.getElementById("btnTopo");
    let btnGray = document.getElementById("btnGray");
    
    view.ui.add(btnTopo, "top-right");
    view.ui.add(btnGray, "top-right");
    
    
    btnTopo.addEventListener("click", function (event) {
        view.map = topoMap;
        btnTopo.classList.add("active-btn");
        btnGray.classList.remove("active-btn");
    });
    
    btnGray.addEventListener("click", function (event) {
        view.map = grayMap;
        btnTopo.classList.remove("active-btn");
        btnGray.classList.add("active-btn");
    });
    
    view.watch("extent.center", function (event) {
        event && console.log(`Long: ${event.longitude} & Lat: ${event.latitude}`);
    });


   

});


