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
    },{
        "name": "cluster0-label1",
        "icon":"icons/sapporo/cluster0-1.png",
        "lat": "43.060814",
        "long": "141.354089"
    },{
        "name": "cluster0-label3",
        "icon":"icons/sapporo/cluster0-3.png",
        "lat": "43.059891",
        "long": "141.34653"
    },{
        "name": "cluster0-label7",
        "icon":"icons/sapporo/cluster0-7.png",
        "lat": "43.060833",
        "long": "141.355833"
    },{
        "name": "cluster0-label8",
        "icon":"icons/sapporo/cluster0-8.png",
        "lat": "43.058863",
        "long": "141.338436"
    },{
        "name": "cluster0-label11",
        "icon":"icons/sapporo/cluster0-11.png",
        "lat": "43.059711",
        "long": "141.344719"
    },{
        "name": "cluster0-label23",
        "icon":"icons/sapporo/cluster0-23.png",
        "lat": "43.0592",
        "long": "141.341591"
    },{
        "name": "cluster0-label27",
        "icon":"icons/sapporo/cluster0-27.png",
        "lat": "43.059",
        "long": "141.340333"
    },{
        "name": "cluster0-label28",
        "icon":"icons/sapporo/cluster0-28.png",
        "lat": "43.059555",
        "long": "141.343152"
    },{
        "name": "cluster2-label1",
        "icon":"icons/sapporo/cluster2-1.png",
        "lat": "43.071333",
        "long": "141.342833"
    },{
        "name": "cluster2-label3",
        "icon":"icons/sapporo/cluster2-3.png",
        "lat": "43.070666",
        "long": "141.343333"
    },{
        "name": "cluster5-label4",
        "icon":"icons/sapporo/cluster5-4.png",
        "lat": "43.068625",
        "long": "141.350801"
    },{
        "name": "cluster5-label6",
        "icon":"icons/sapporo/cluster5-6.png",
        "lat": "43.068258",
        "long": "141.35305"
    },{
        "name": "cluster5-label7",
        "icon":"icons/sapporo/cluster5-7.png",
        "lat": "43.068638",
        "long": "141.350878"
    },{
        "name": "cluster5-label9",
        "icon":"icons/sapporo/cluster5-9.png",
        "lat": "43.066963",
        "long": "141.350491"
    },{
        "name": "cluster5-label10",
        "icon":"icons/sapporo/cluster5-10.png",
        "lat": "43.066666",
        "long": "141.350555"
    },{
        "name": "cluster5-label18",
        "icon":"icons/sapporo/cluster5-18.png",
        "lat": "43.066944",
        "long": "141.349583"
    },{
        "name": "cluster5-label19",
        "icon":"icons/sapporo/cluster5-19.png",
        "lat": "43.068448",
        "long": "141.352468"
    },{
        "name": "cluster5-label25",
        "icon":"icons/sapporo/cluster5-25.png",
        "lat": "43.068832",
        "long": "141.35205"
    },{
        "name": "cluster5-label26",
        "icon":"icons/sapporo/cluster5-26.png",
        "lat": "43.066844",
        "long": "141.351715"
    },{
        "name": "cluster9-label2",
        "icon":"icons/sapporo/cluster9-2.png",
        "lat": "43.063944",
        "long": "141.347855"
    },{
        "name": "cluster9-label7",
        "icon":"icons/sapporo/cluster9-7.png",
        "lat": "43.064028",
        "long": "141.348037"
    },{
        "name": "cluster10-label0",
        "icon":"icons/sapporo/cluster10-0.png",
        "lat": "43.062587",
        "long": "141.353537"
    },{
        "name": "cluster26-label2",
        "icon":"icons/sapporo/cluster26-2.png",
        "lat": "43.075611",
        "long": "141.342722"
    },{
        "name": "cluster27-label0",
        "icon":"icons/sapporo/cluster27-0.png",
        "lat": "43.055311",
        "long": "141.353285"
    },{
        "name": "cluster27-label2",
        "icon":"icons/sapporo/cluster27-2.png",
        "lat": "43.0545",
        "long": "141.354"
    },{
        "name": "cluster27-label5",
        "icon":"icons/sapporo/cluster27-5.png",
        "lat": "43.054726",
        "long": "141.353523"
    },{
        "name": "cluster33-label0",
        "icon":"icons/sapporo/cluster33-0.png",
        "lat": "43.056858",
        "long": "141.351009"
    },{
        "name": "cluster48-label2",
        "icon":"icons/sapporo/cluster48-2.png",
        "lat": "43.067166",
        "long": "141.352666"
    },{
        "name": "cluster53-label1",
        "icon":"icons/sapporo/cluster53-1.png",
        "lat": "43.065181",
        "long": "141.362125"
    },{
        "name": "cluster57-label0",
        "icon":"icons/sapporo/cluster57-0.png",
        "lat": "43.057224",
        "long": "141.35263"
    },{
        "name": "cluster57-label2",
        "icon":"icons/sapporo/cluster57-2.png",
        "lat": "43.057224",
        "long": "141.35263"
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