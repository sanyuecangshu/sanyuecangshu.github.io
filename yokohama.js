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
        "name": "cluster0-label1",
        "icon":"icons/yokohama/cluster0-1.png",
        "lat": "35.451926",
        "long": "139.642504"
    },{
        "name": "cluster0-label3",
        "icon":"icons/yokohama/cluster0-3.png",
        "lat": "35.456995",
        "long": "139.634714"        
    },{
        "name": "cluster0-label4",
        "icon":"icons/yokohama/cluster0-4.png",
        "lat": "35.454535",
        "long": "139.631509"  
    },{
        "name": "cluster0-label5",
        "icon":"icons/yokohama/cluster0-5.png",
        "lat": "35.456335",
        "long": "139.633998"        
    },{
        "name": "cluster0-label8",
        "icon":"icons/yokohama/cluster0-8.png",
        "lat": "35.456119",
        "long": "139.636638"   
    },{
        "name": "cluster0-label11",
        "icon":"icons/yokohama/cluster0-11.png",
        "lat": "35.457244",
        "long": "139.636745"   
    },{
        "name": "cluster0-label12",
        "icon":"icons/yokohama/cluster0-12.png",
        "lat": "35.447307",
        "long": "139.641294"   
    },{
        "name": "cluster0-label13",
        "icon":"icons/yokohama/cluster0-13.png",
        "lat": "35.454411",
        "long": "139.631127"   
    },{
        "name": "cluster0-label15",
        "icon":"icons/yokohama/cluster0-15.png",
        "lat": "35.453502",
        "long": "139.640975"   
    },{
        "name": "cluster0-label16",
        "icon":"icons/yokohama/cluster0-16.png",
        "lat": "35.455756",
        "long": "139.632626"   
    },{
        "name": "cluster0-label18",
        "icon":"icons/yokohama/cluster0-18.png",
        "lat": "35.451944",
        "long": "139.638938"   
    },{
        "name": "cluster0-label19",
        "icon":"icons/yokohama/cluster0-19.png",
        "lat": "35.452333",
        "long": "139.642217"   
    },{
        "name": "cluster0-label20",
        "icon":"icons/yokohama/cluster0-20.png",
        "lat": "35.44983",
        "long": "139.643755"   
    },{
        "name": "cluster0-label21",
        "icon":"icons/yokohama/cluster0-21.png",
        "lat": "35.456694",
        "long": "139.630823"   
    },{
        "name": "cluster0-label22",
        "icon":"icons/yokohama/cluster0-22.png",
        "lat": "35.453538",
        "long": "139.637603"   
    },{
        "name": "cluster0-label26",
        "icon":"icons/yokohama/cluster0-26.png",
        "lat": "35.457022",
        "long": "139.63053"   
    },{
        "name": "cluster0-label33",
        "icon":"icons/yokohama/cluster0-33.png",
        "lat": "35.449011",
        "long": "139.643327"   
    },{
        "name": "cluster0-label35",
        "icon":"icons/yokohama/cluster0-35.png",
        "lat": "35.457052",
        "long": "139.631194"   
    },{
        "name": "cluster0-label41",
        "icon":"icons/yokohama/cluster0-41.png",
        "lat": "35.452708",
        "long": "139.632647"   
    },{
        "name": "cluster0-label43",
        "icon":"icons/yokohama/cluster0-43.png",
        "lat": "35.447166",
        "long": "139.643"   
    },{
        "name": "cluster0-label49",
        "icon":"icons/yokohama/cluster0-49.png",
        "lat": "35.453187",
        "long": "139.636716"   
    },{
        "name": "cluster0-label56",
        "icon":"icons/yokohama/cluster0-56.png",
        "lat": "35.455166",
        "long": "139.631166"   
    },{
        "name": "cluster0-label60",
        "icon":"icons/yokohama/cluster0-60.png",
        "lat": "35.454692",
        "long": "139.631316"   
    },{
        "name": "cluster5-label1",
        "icon":"icons/yokohama/cluster5-1.png",
        "lat": "35.446938",
        "long": "139.623289"   
    },{
        "name": "cluster6-label0",
        "icon":"icons/yokohama/cluster6-0.png",
        "lat": "35.459816",
        "long": "139.635452"   
    },{
        "name": "cluster6-label1",
        "icon":"icons/yokohama/cluster6-1.png",
        "lat": "35.459816",
        "long": "139.635452"   
    },{
        "name": "cluster6-label4",
        "icon":"icons/yokohama/cluster6-4.png",
        "lat": "35.459822",
        "long": "139.6353"   
    },{
        "name": "cluster6-label7",
        "icon":"icons/yokohama/cluster6-7.png",
        "lat": "35.459816",
        "long": "139.635452"   
    },{
        "name": "cluster7-label0",
        "icon":"icons/yokohama/cluster7-0.png",
        "lat": "35.466188",
        "long": "139.622713"   
    },{
        "name": "cluster7-label1",
        "icon":"icons/yokohama/cluster7-1.png",
        "lat": "35.465698",
        "long": "139.623031"   
    },{
        "name": "cluster7-label2",
        "icon":"icons/yokohama/cluster7-2.png",
        "lat": "35.466192",
        "long": "139.622154"   
    },{
        "name": "cluster7-label3",
        "icon":"icons/yokohama/cluster7-3.png",
        "lat": "35.466192",
        "long": "139.62269"   
    },{
        "name": "cluster8-label0",
        "icon":"icons/yokohama/cluster8-0.png",
        "lat": "35.444666",
        "long": "139.639666"   
    },{
        "name": "cluster13-label0",
        "icon":"icons/yokohama/cluster13-0.png",
        "lat": "35.463482",
        "long": "139.626114"   
    },{
        "name": "cluster17-label0",
        "icon":"icons/yokohama/cluster17-0.png",
        "lat": "35.456333",
        "long": "139.641666"   
    },{
        "name": "cluster22-label0",
        "icon":"icons/yokohama/cluster22-0.png",
        "lat": "35.450833",
        "long": "139.631833"   
    },{
        "name": "cluster36-label0",
        "icon":"icons/yokohama/cluster36-0.png",
        "lat": "35.455365",
        "long": "139.638612"   
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
showGallery('image-gallery-cluster0-label1');
