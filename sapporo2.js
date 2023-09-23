window.addEventListener("load" , function (){

    //マップの表示位置を指定(緯度・経度)
    var map = L.map('mapid').setView([43.06885651569661, 141.3508089420766], 13);

    //地図データはOSMから読み込み
    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    })
    tileLayer.addTo(map);

    // ローカルのGeoJSONを読込 //
    const jsonData = "sapporo.json";
      

    // -- featuresを走査 -- // 
    $.getJSON(jsonData, function (data) {
        let icn;
        let geojson = L.geoJson(data, {
                onEachFeature: function(feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name);
                        layer.on('mouseover', function(e) {
                            this.openPopup();
                        });
                        layer.on('mouseout', function(e) {
                            this.closePopup();
                        });
                        layer.on('click', function(e) {
                            showGallery('image-gallery-'+feature.properties.name);
                        });
                    }
                },
                pointToLayer: function (feature, latlng){
                    if (feature.properties.icon !== "") {
                        icn = L.icon({
                        iconUrl: feature.properties.icon,
                        //shadowUrl: 'leaf-shadow.png',
                        iconSize: [75, 90],
                        iconAnchor: [37, 90],
                        popupAnchor: [0,-85]
                        });
        
                    }
                    return L.marker(latlng, {icon: icn});
                },
            });
            geojson.addTo(map);

    });
});

function showGallery(galleryId) {
    // Hide all galleries
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.style.display = 'none';
    });

    // Show the selected gallery
    const selectedGallery = document.getElementById(galleryId);
    if (selectedGallery) {
        selectedGallery.style.display = 'block';
    }
}

// Show the initial gallery
showGallery('image-gallery-cluster0-label0');
