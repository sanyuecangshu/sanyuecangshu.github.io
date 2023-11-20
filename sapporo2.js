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
        "name": "cluster0",
        "icon":"icons/sapporo2/cluster0.png",
        "lat": "43.058906",
        "long": "141.351979"
    },{
        "name": "cluster4",
        "icon":"icons/sapporo2/cluster4.png",
        "lat": "43.060011",
        "long": "141.347865"
    },{
        "name": "cluster5",
        "icon":"icons/sapporo2/cluster5.png",
        "lat": "43.067",
        "long": "141.351666"
    },{
        "name": "cluster12",
        "icon":"icons/sapporo2/cluster12.png",
        "lat": "43.065333",
        "long": "141.348833"
    },{
        "name": "cluster13",
        "icon":"icons/sapporo2/cluster13.png",
        "lat": "43.070797",
        "long": "141.342414"
    },{
        "name": "cluster14",
        "icon":"icons/sapporo2/cluster14.png",
        "lat": "43.062538",
        "long": "141.353659"
    },{
        "name": "cluster16",
        "icon":"icons/sapporo2/cluster16.png",
        "lat": "43.067963",
        "long": "141.349983"
    },{
        "name": "cluster18",
        "icon":"icons/sapporo2/cluster18.png",
        "lat": "43.059583",
        "long": "141.345039"
    },{
        "name": "cluster22",
        "icon":"icons/sapporo2/cluster22.png",
        "lat": "43.06435",
        "long": "141.349613"
    },{
        "name": "cluster23",
        "icon":"icons/sapporo2/cluster23.png",
        "lat": "43.056115",
        "long": "141.355848"
    },{
        "name": "cluster25",
        "icon":"icons/sapporo2/cluster25.png",
        "lat": "43.058707",
        "long": "141.338925"
    },{
        "name": "cluster32",
        "icon":"icons/sapporo2/cluster32.png",
        "lat": "43.057161",
        "long": "141.351267"
    },{
        "name": "cluster37",
        "icon":"icons/sapporo2/cluster37.png",
        "lat": "43.055091",
        "long": "141.354045"
    },{
        "name": "cluster41",
        "icon":"icons/sapporo2/cluster41.png",
        "lat": "43.068558",
        "long": "141.352329"
    },{
        "name": "cluster52",
        "icon":"icons/sapporo2/cluster52.png",
        "lat": "43.067023",
        "long": "141.349507"
    },{
        "name": "cluster60",
        "icon":"icons/sapporo2/cluster60.png",
        "lat": "43.067663",
        "long": "141.350155"
    },{
        "name": "cluster64",
        "icon":"icons/sapporo2/cluster64.png",
        "lat": "43.057179",
        "long": "141.353101"
    },{
        "name": "cluster65",
        "icon":"icons/sapporo2/cluster65.png",
        "lat": "43.067169",
        "long": "141.350905"
    },{
        "name": "cluster66",
        "icon":"icons/sapporo2/cluster66.png",
        "lat": "43.058929",
        "long": "141.340237"
    },{
        "name": "cluster67",
        "icon":"icons/sapporo2/cluster67.png",
        "lat": "43.059319",
        "long": "141.342425"
    },{
        "name": "cluster69",
        "icon":"icons/sapporo2/cluster69.png",
        "lat": "43.065501",
        "long": "141.36265"
    },{
        "name": "cluster72",
        "icon":"icons/sapporo2/cluster72.png",
        "lat": "43.056934",
        "long": "141.349105"
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
showGallery('image-gallery-cluster0');