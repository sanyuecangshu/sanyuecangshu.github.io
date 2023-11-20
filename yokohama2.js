window.addEventListener("load" , function (){

    //マップの表示位置を指定(緯度・経度)
    var map = L.map('mapid').setView([35.46619952759569, 139.62207272604186], 13);

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
        "icon":"icons/yokohama2/cluster2.png",
        "lat": "35.456697",
        "long": "139.635522"
    },{
        "name": "cluster5",
        "icon":"icons/yokohama2/cluster5.png",
        "lat": "35.452175",
        "long": "139.642745"
    },{
        "name": "cluster6",
        "icon":"icons/yokohama2/cluster6.png",
        "lat": "35.449431",
        "long": "139.642882"
    },{
        "name": "cluster11",
        "icon":"icons/yokohama2/cluster11.png",
        "lat": "35.454666",
        "long": "139.6375"
    },{
        "name": "cluster12",
        "icon":"icons/yokohama2/cluster12.png",
        "lat": "35.455666",
        "long": "139.638833"
    },{
        "name": "cluster15",
        "icon":"icons/yokohama2/cluster15.png",
        "lat": "35.447458",
        "long": "139.623162"
    },{
        "name": "cluster17",
        "icon":"icons/yokohama2/cluster17.png",
        "lat": "35.460101",
        "long": "139.635189"
    },{
        "name": "cluster18",
        "icon":"icons/yokohama2/cluster18.png",
        "lat": "35.465698",
        "long": "139.623031"
    },{
        "name": "cluster19",
        "icon":"icons/yokohama2/cluster19.png",
        "lat": "35.453153",
        "long": "139.638552"
    },{
        "name": "cluster20",
        "icon":"icons/yokohama2/cluster20.png",
        "lat": "35.455597",
        "long": "139.641911"
    },{
        "name": "cluster22",
        "icon":"icons/yokohama2/cluster22.png",
        "lat": "35.454797",
        "long": "139.631166"
    },{
        "name": "cluster25",
        "icon":"icons/yokohama2/cluster25.png",
        "lat": "35.452166",
        "long": "139.639333"
    },{
        "name": "cluster27",
        "icon":"icons/yokohama2/cluster27.png",
        "lat": "35.466535",
        "long": "139.626598"
    },{
        "name": "cluster30",
        "icon":"icons/yokohama2/cluster30.png",
        "lat": "35.455963",
        "long": "139.632869"
    },{
        "name": "cluster34",
        "icon":"icons/yokohama2/cluster34.png",
        "lat": "35.463466",
        "long": "139.626142"
    },{
        "name": "cluster42",
        "icon":"icons/yokohama2/cluster42.png",
        "lat": "35.450988",
        "long": "139.642338"
    },{
        "name": "cluster47",
        "icon":"icons/yokohama2/cluster47.png",
        "lat": "35.448186",
        "long": "139.643605"
    },{
        "name": "cluster48",
        "icon":"icons/yokohama2/cluster48.png",
        "lat": "35.443425",
        "long": "139.640098"
    },{
        "name": "cluster50",
        "icon":"icons/yokohama2/cluster50.png",
        "lat": "35.4565",
        "long": "139.633333"
    },{
        "name": "cluster56",
        "icon":"icons/yokohama2/cluster56.png",
        "lat": "35.453574",
        "long": "139.638076"
    },{
        "name": "cluster60",
        "icon":"icons/yokohama2/cluster60.png",
        "lat": "35.457419",
        "long": "139.630955"
    },{
        "name": "cluster63",
        "icon":"icons/yokohama2/cluster63.png",
        "lat": "35.453166",
        "long": "139.641"
    },{
        "name": "cluster64",
        "icon":"icons/yokohama2/cluster64.png",
        "lat": "35.46794",
        "long": "139.62181"
    },{
        "name": "cluster65",
        "icon":"icons/yokohama2/cluster65.png",
        "lat": "35.467319",
        "long": "139.621124"
    },{
        "name": "cluster66",
        "icon":"icons/yokohama2/cluster66.png",
        "lat": "35.452883",
        "long": "139.634428"
    },{
        "name": "cluster68",
        "icon":"icons/yokohama2/cluster68.png",
        "lat": "35.450393",
        "long": "139.640225"
    },{
        "name": "cluster73",
        "icon":"icons/yokohama2/cluster73.png",
        "lat": "35.458744",
        "long": "139.635711"
    },{
        "name": "cluster79",
        "icon":"icons/yokohama2/cluster79.png",
        "lat": "35.46485",
        "long": "139.620311"
    },{
        "name": "cluster80",
        "icon":"icons/yokohama2/cluster80.png",
        "lat": "35.454166",
        "long": "139.6385"
    },{
        "name": "cluster81",
        "icon":"icons/yokohama2/cluster81.png",
        "lat": "35.458476",
        "long": "139.637558"
    },{
        "name": "cluster84",
        "icon":"icons/yokohama2/cluster84.png",
        "lat": "35.451354",
        "long": "139.631352"
    },{
        "name": "cluster97",
        "icon":"icons/yokohama2/cluster97.png",
        "lat": "35.452538",
        "long": "139.632768"
    },{
        "name": "cluster100",
        "icon":"icons/yokohama2/cluster100.png",
        "lat": "35.4445",
        "long": "139.6395"
    },{
        "name": "cluster101",
        "icon":"icons/yokohama2/cluster101.png",
        "lat": "35.446922",
        "long": "139.642694"
    },{
        "name": "cluster102",
        "icon":"icons/yokohama2/cluster102.png",
        "lat": "35.457916",
        "long": "139.632313"
    },{
        "name": "cluster103",
        "icon":"icons/yokohama2/cluster103.png",
        "lat": "35.447264",
        "long": "139.641573"
    },{
        "name": "cluster105",
        "icon":"icons/yokohama2/cluster105.png",
        "lat": "35.46572",
        "long": "139.622347"
    },{
        "name": "cluster106",
        "icon":"icons/yokohama2/cluster106.png",
        "lat": "35.453005",
        "long": "139.632024"
    },{
        "name": "cluster108",
        "icon":"icons/yokohama2/cluster108.png",
        "lat": "35.452911",
        "long": "139.639361"
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
