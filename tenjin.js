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
        "name": "cluster4",
        "icon":"icons/tenjin/cluster4.png",
        "lat": "33.585736",
        "long": "130.383166"
    }, {
        "name": "cluster35",
        "icon":"icons/tenjin/cluster35.png",
        "lat": "33.584058",
        "long": "130.382486"
    },{
        "name": "cluster59",
        "icon":"icons/tenjin/cluster59.png",
        "lat": "33.595322",
        "long": "130.362077" 
    },{
        "name": "cluster6-label1",
        "icon":"icons/tenjin/cluster6-1.png",
        "lat": "33.590002",
        "long": "130.420622"   
    },{
        "name": "cluster6-label2",
        "icon":"icons/tenjin/cluster6-2.png",
        "lat": "33.590002",
        "long": "130.420622"        
    },{
        "name": "cluster6-label4",
        "icon":"icons/tenjin/cluster6-4.png",
        "lat": "33.590114",
        "long": "130.420642"        
    },{
        "name": "cluster10-label0",
        "icon":"icons/tenjin/cluster10-0.png",
        "lat": "33.593435",
        "long": "130.411135"         
    },{
        "name": "cluster10-label1",
        "icon":"icons/tenjin/cluster10-1.png",
        "lat": "33.592967",
        "long": "130.410439"        
    },{
        "name": "cluster10-label4",
        "icon":"icons/tenjin/cluster10-4.png",
        "lat": "33.592977",
        "long": "130.410506"     
    },{
        "name": "cluster16-label0",
        "icon":"icons/tenjin/cluster16-0.png",
        "lat": "33.589941",
        "long": "130.419188"        
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
showGallery('image-gallery-cluster4');

