window.addEventListener("load" , function (){

    //マップの表示位置を指定(緯度・経度)
    var map = L.map('mapid').setView([43.06451279340781, 141.34680019739275], 13);　//北海道庁を中心にする

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
        "name": "cluster0-label0",
        "icon":"icons/sapporo/cluster0-0.png",
        "lat": "43.059086",
        "long": "141.352188"
    }, {
        "name": "cluster3-label0",
        "icon":"icons/sapporo/cluster3-0.png",
        "lat": "43.060888",
        "long": "141.353298"
    },{
        "name": "cluster3-label3",
        "icon":"icons/sapporo/cluster3-3.png",
        "lat": "43.059883",
        "long": "141.349636"        
    },{
        "name": "cluster3-label5",
        "icon":"icons/sapporo/cluster3-5.png",
        "lat": "43.061096",
        "long": "141.35642"        
    },{
        "name": "cluster3-label6",
        "icon":"icons/sapporo/cluster3-6.png",
        "lat": "43.059999",
        "long": "141.348166"  
    },{
        "name": "cluster3-label8",
        "icon":"icons/sapporo/cluster3-8.png",
        "lat": "43.060972",
        "long": "141.35405"          
    },{
        "name": "cluster3-label12",
        "icon":"icons/sapporo/cluster3-12.png",
        "lat": "43.059555",
        "long": "141.343152"         
    },{
        "name": "cluster4-label1",
        "icon":"icons/sapporo/cluster4-1.png",
        "lat": "43.066716",
        "long": "141.350763"        
    },{
        "name": "cluster6-label0",
        "icon":"icons/sapporo/cluster6-0.png",
        "lat": "43.062587",
        "long": "141.353537"         
    },{
        "name": "cluster8-label0",
        "icon":"icons/sapporo/cluster8-0.png",
        "lat": "43.068699",
        "long": "141.35044"        
    },{
        "name": "cluster8-label1",
        "icon":"icons/sapporo/cluster8-1.png",
        "lat": "43.06855",
        "long": "141.349763"        
    },{
        "name": "cluster8-label2",
        "icon":"icons/sapporo/cluster8-2.png",
        "lat": "43.068809",
        "long": "141.350709"         
    },{
        "name": "cluster9-label1",
        "icon":"icons/sapporo/cluster9-1.png",
        "lat": "43.063969",
        "long": "141.3479"          
    },{
        "name": "cluster9-label4",
        "icon":"icons/sapporo/cluster9-4.png",
        "lat": "43.063919",
        "long": "141.350172"  
    },{
        "name": "cluster20-label0",
        "icon":"icons/sapporo/cluster20-0.png",
        "lat": "43.055721",
        "long": "141.35324"        
    },{
        "name": "cluster31-label0",
        "icon":"icons/sapporo/cluster31-0.png",
        "lat": "43.068277",
        "long": "141.352608"         
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
showGallery('image-gallery-cluster0-label0');