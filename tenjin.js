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
        "name": "cluster0-label3",
        "icon":"icons/tenjin/cluster0-3.png",
        "lat": "33.594938",
        "long": "130.41393"
    },{
        "name": "cluster0-label5",
        "icon":"icons/tenjin/cluster0-5.png",
        "lat": "33.593508",
        "long": "130.411178"        
    },{
        "name": "cluster0-label9",
        "icon":"icons/tenjin/cluster0-9.png",
        "lat": "33.590169",
        "long": "130.410726"       
    },{
        "name": "cluster0-label12",
        "icon":"icons/tenjin/cluster0-12.png",
        "lat": "33.590689",
        "long": "130.407779"         
    },{
        "name": "cluster0-label30",
        "icon":"icons/tenjin/cluster0-30.png",
        "lat": "33.590456",
        "long": "130.408229"         
    },{
        "name": "cluster0-label32",
        "icon":"icons/tenjin/cluster0-32.png",
        "lat": "33.5925",
        "long": "130.4048"         
    },{
        "name": "cluster0-label36",
        "icon":"icons/tenjin/cluster0-36.png",
        "lat": "33.5945",
        "long": "130.4055"       
    },{
        "name": "cluster2-label13",
        "icon":"icons/tenjin/cluster2-13.png",
        "lat": "33.588547",
        "long": "130.399313"        
    },{
        "name": "cluster2-label16",
        "icon":"icons/tenjin/cluster2-16.png",
        "lat": "33.589833",
        "long": "130.398166"         
    },{
        "name": "cluster2-label22",
        "icon":"icons/tenjin/cluster2-22.png",
        "lat": "33.587222",
        "long": "130.398333"          
    },{
        "name": "cluster2-label27",
        "icon":"icons/tenjin/cluster2-27.png",
        "lat": "33.589314",
        "long": "130.399351"         
    },{
        "name": "cluster2-label28",
        "icon":"icons/tenjin/cluster2-28.png",
        "lat": "33.586776",
        "long": "130.397171"        
    },{
        "name": "cluster2-label32",
        "icon":"icons/tenjin/cluster2-32.png",
        "lat": "33.591448",
        "long": "130.402425"        
    },{
        "name": "cluster3-label1",
        "icon":"icons/tenjin/cluster3-1.png",
        "lat": "33.586333",
        "long": "130.383"        
    },{
        "name": "cluster3-label10",
        "icon":"icons/tenjin/cluster3-10.png",
        "lat": "33.584058",
        "long": "130.382486"         
    },{
        "name": "cluster5-label0",
        "icon":"icons/tenjin/cluster5-0.png",
        "lat": "33.590114",
        "long": "130.420642"         
    },{
        "name": "cluster5-label2",
        "icon":"icons/tenjin/cluster5-2.png",
        "lat": "33.589941",
        "long": "130.419188"         
    },{
        "name": "cluster5-label5",
        "icon":"icons/tenjin/cluster5-5.png",
        "lat": "33.590002",
        "long": "130.420622"         
    },{
        "name": "cluster21-label1",
        "icon":"icons/tenjin/cluster21-1.png",
        "lat": "33.595322",
        "long": "130.362077"         
    },{
        "name": "cluster25-label0",
        "icon":"icons/tenjin/cluster25-0.png",
        "lat": "33.585951",
        "long": "130.376408"         
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
showGallery('image-gallery-cluster0-label3');

