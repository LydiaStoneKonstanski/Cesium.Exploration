esriConfig.apiKey = "<AAPK2783f16d57c84b76b9d4a4a6e91c2e7bx1JoRgkjG9wcDuYVbycyoQ-shvVHmFt2mHjmb8xCiuvmIt807A-BhuLGkA4-MDh7>";
const map = new Map({
    basemap: "arcgis-topographic" // Basemap layer
});

const view = new MapView({
    map: map,
    center: [-118.805, 34.027],
    zoom: 13, // scale: 72223.819286
    container: "viewDiv",
    constraints: {
        snapToZoom: false
    }
});
