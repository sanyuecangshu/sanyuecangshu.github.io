window.addEventListener("load" , function (){

    //マップの表示位置を指定(緯度・経度)
    var map = L.map('mapid').setView([33.58916502834144, 130.39054346027183], 13);　//赤坂駅を中心に

    //地図データはOSMから読み込み
    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    })
    tileLayer.addTo(map);

    // マーカー画像の場所を指定する
    //L.marker([33.585736, 130.383166]).addTo(map); //1つ目のマーカー
    //L.marker([33.584058, 130.382486]).addTo(map); //２つ目のマーカー
    var features = [];
    var place = [{
        "name": "cluster2",
        "icon":"icons/tenjin2/cluster2.png",
        "lat": "33.588386",
        "long": "130.398803"
    },{
        "name": "cluster3",
        "icon":"icons/tenjin2/cluster3.png",
        "lat": "33.589166",
        "long": "130.381"
    },{
        "name": "cluster4",
        "icon":"icons/tenjin2/cluster4.png",
        "lat": "33.585736",
        "long": "130.383166"
    },{
        "name": "cluster6",
        "icon":"icons/tenjin2/cluster6.png",
        "lat": "33.589844",
        "long": "130.412197"
    },{
        "name": "cluster8",
        "icon":"icons/tenjin2/cluster8.png",
        "lat": "33.590511",
        "long": "130.419311"
    },{
        "name": "cluster9",
        "icon":"icons/tenjin2/cluster9.png",
        "lat": "33.594738",
        "long": "130.414069"
    },{
        "name": "cluster10",
        "icon":"icons/tenjin2/cluster10.png",
        "lat": "33.591699",
        "long": "130.40992"
    },{
        "name": "cluster11",
        "icon":"icons/tenjin2/cluster11.png",
        "lat": "33.593799",
        "long": "130.408574"
    },{
        "name": "cluster12",
        "icon":"icons/tenjin2/cluster12.png",
        "lat": "33.593127",
        "long": "130.410513"
    },{
        "name": "cluster19",
        "icon":"icons/tenjin2/cluster19.png",
        "lat": "33.586666",
        "long": "130.397333"
    },{
        "name": "cluster29",
        "icon":"icons/tenjin2/cluster29.png",
        "lat": "33.591314",
        "long": "130.406856"
    },{
        "name": "cluster37",
        "icon":"icons/tenjin2/cluster37.png",
        "lat": "33.584272",
        "long": "130.382513"
    },{
        "name": "cluster39",
        "icon":"icons/tenjin2/cluster39.png",
        "lat": "33.588",
        "long": "130.395999"
    },{
        "name": "cluster48",
        "icon":"icons/tenjin2/cluster48.png",
        "lat": "33.591982",
        "long": "130.406324"
    },{
        "name": "cluster51",
        "icon":"icons/tenjin2/cluster51.png",
        "lat": "33.591488",
        "long": "130.402465"
    },{
        "name": "cluster57",
        "icon":"icons/tenjin2/cluster57.png",
        "lat": "33.595127",
        "long": "130.406682"
    },{
        "name": "cluster61",
        "icon":"icons/tenjin2/cluster61.png",
        "lat": "33.595312",
        "long": "130.362082"
    },{
        "name": "cluster63",
        "icon":"icons/tenjin2/cluster63.png",
        "lat": "33.586333",
        "long": "130.376662"
    },{
        "name": "cluster67",
        "icon":"icons/tenjin2/cluster67.png",
        "lat": "33.588986",
        "long": "130.396401"
    },{
        "name": "cluster76",
        "icon":"icons/tenjin2/cluster76.png",
        "lat": "33.588833",
        "long": "130.393833"
    },{
        "name": "cluster85",
        "icon":"icons/tenjin2/cluster85.png",
        "lat": "33.593252",
        "long": "130.404633"
    },{
        "name": "cluster86",
        "icon":"icons/tenjin2/cluster86.png",
        "lat": "33.591666",
        "long": "130.394999"
    }];
    // GeoJSON形式で複数個のマーカーを設定する
    for (var i = 0; i < place.length; i++) {
        features.push({ // 1つのマーカーの情報を格納する
        "type": "Feature",
        "properties": {
            "name": place[i].name,
            "icon": place[i].icon
        },
        "geometry": {
            "type": "Point",
            "coordinates": [place[i].long, place[i].lat]
        }
        });
    }
    L.geoJson(features).addTo(map);


    //マウスクリックでそのクラスターの画像ギャラリーに切り替える
    let icn;
        L.geoJson(features, {
            onEachFeature: function(features, layer) {
                if (features.properties && features.properties.name) {
                    //layer.bindPopup(features.properties.name);
                    //layer.on('mouseover', function(e) {
                    //    this.openPopup();
                    //});
                    //layer.on('mouseout', function(e) {
                    //    this.closePopup();
                    //});
                    layer.on('click', function(e) {
                        showGallery('image-gallery-'+features.properties.name);
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
        }).addTo(map);
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
showGallery('image-gallery-cluster2');

