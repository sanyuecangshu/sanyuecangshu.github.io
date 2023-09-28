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
        "name": "cluster1-label0",
        "icon":"icons/yokohama/cluster1-0.png",
        "lat": "35.45228",
        "long": "139.641551"
    },{
        "name": "cluster1-label2",
        "icon":"icons/yokohama/cluster1-2.png",
        "lat": "35.452333",
        "long": "139.642217"      
    },{
        "name": "cluster6-label1",
        "icon":"icons/yokohama/cluster6-1.png",
        "lat": "35.455147",
        "long": "139.637872"       
    },{
        "name": "cluster6-label2",
        "icon":"icons/yokohama/cluster6-2.png",
        "lat": "35.456475",
        "long": "139.637088"       
    },{
        "name": "cluster7-label1",
        "icon":"icons/yokohama/cluster7-1.png",
        "lat": "35.459816",
        "long": "139.635452"       
    },{
        "name": "cluster7-label3",
        "icon":"icons/yokohama/cluster7-3.png",
        "lat": "35.459822",
        "long": "139.6353"
    },{
        "name": "cluster8-label0",
        "icon":"icons/yokohama/cluster8-0.png",
        "lat": "35.466188",
        "long": "139.622713"
    },{
        "name": "cluster11-label0",
        "icon":"icons/yokohama/cluster11-0.png",
        "lat": "35.453766",
        "long": "139.631486"
    },{
        "name": "cluster11-label1",
        "icon":"icons/yokohama/cluster11-1.png",
        "lat": "35.454587",
        "long": "139.632282"
    },{
        "name": "cluster14-label0",
        "icon":"icons/yokohama/cluster14-0.png",
        "lat": "35.463482",
        "long": "139.626114"
    },{
        "name": "cluster17-label1",
        "icon":"icons/yokohama/cluster17-1.png",
        "lat": "35.457556",
        "long": "139.635772"
    },{
        "name": "cluster17-label3",
        "icon":"icons/yokohama/cluster17-3.png",
        "lat": "35.457244",
        "long": "139.636745"   
    },{
        "name": "cluster23-label0",
        "icon":"icons/yokohama/cluster23-0.png",
        "lat": "35.450833",
        "long": "139.631833" 
    },{
        "name": "cluster25-label0",
        "icon":"icons/yokohama/cluster25-0.png",
        "lat": "35.452833",
        "long": "139.6345" 
    },{
        "name": "cluster30-label0",
        "icon":"icons/yokohama/cluster30-0.png",
        "lat": "35.456246",
        "long": "139.63314"
    },{
        "name": "cluster30-label1",
        "icon":"icons/yokohama/cluster30-1.png",
        "lat": "35.456335",
        "long": "139.633998"
    },{
        "name": "cluster35-label0",
        "icon":"icons/yokohama/cluster35-0.png",
        "lat": "35.451944",
        "long": "139.638938"
    },{
        "name": "cluster45-label0",
        "icon":"icons/yokohama/cluster45-0.png",
        "lat": "35.449553",
        "long": "139.643268"      
    },{
        "name": "cluster48-label0",
        "icon":"icons/yokohama/cluster48-0.png",
        "lat": "35.455756",
        "long": "139.632626"
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
showGallery('image-gallery-cluster1-label0');
