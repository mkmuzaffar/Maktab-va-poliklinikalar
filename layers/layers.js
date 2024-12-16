ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([7684370.244129, 5031862.900058, 7746996.088713, 5075737.251061]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Toshkentshahri_2 = new ol.format.GeoJSON();
var features_Toshkentshahri_2 = format_Toshkentshahri_2.readFeatures(json_Toshkentshahri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toshkentshahri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toshkentshahri_2.addFeatures(features_Toshkentshahri_2);
var lyr_Toshkentshahri_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toshkentshahri_2, 
                style: style_Toshkentshahri_2,
                popuplayertitle: "Toshkent shahri",
                interactive: true,
                title: '<img src="styles/legend/Toshkentshahri_2.png" /> Toshkent shahri'
            });
var format_maktablar_3 = new ol.format.GeoJSON();
var features_maktablar_3 = format_maktablar_3.readFeatures(json_maktablar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maktablar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maktablar_3.addFeatures(features_maktablar_3);
var lyr_maktablar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maktablar_3, 
                style: style_maktablar_3,
                popuplayertitle: "maktablar",
                interactive: true,
                title: '<img src="styles/legend/maktablar_3.png" /> maktablar'
            });
var format_oilaviypoliklinikalar_4 = new ol.format.GeoJSON();
var features_oilaviypoliklinikalar_4 = format_oilaviypoliklinikalar_4.readFeatures(json_oilaviypoliklinikalar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oilaviypoliklinikalar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oilaviypoliklinikalar_4.addFeatures(features_oilaviypoliklinikalar_4);
var lyr_oilaviypoliklinikalar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oilaviypoliklinikalar_4, 
                style: style_oilaviypoliklinikalar_4,
                popuplayertitle: "oilaviy poliklinikalar",
                interactive: true,
                title: '<img src="styles/legend/oilaviypoliklinikalar_4.png" /> oilaviy poliklinikalar'
            });
var format_15daqiqalikhudud_5 = new ol.format.GeoJSON();
var features_15daqiqalikhudud_5 = format_15daqiqalikhudud_5.readFeatures(json_15daqiqalikhudud_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15daqiqalikhudud_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15daqiqalikhudud_5.addFeatures(features_15daqiqalikhudud_5);
var lyr_15daqiqalikhudud_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15daqiqalikhudud_5, 
                style: style_15daqiqalikhudud_5,
                popuplayertitle: "15 daqiqalik hudud",
                interactive: false,
                title: '<img src="styles/legend/15daqiqalikhudud_5.png" /> 15 daqiqalik hudud'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Toshkentshahri_2.setVisible(true);lyr_maktablar_3.setVisible(true);lyr_oilaviypoliklinikalar_4.setVisible(true);lyr_15daqiqalikhudud_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_Toshkentshahri_2,lyr_maktablar_3,lyr_oilaviypoliklinikalar_4,lyr_15daqiqalikhudud_5];
lyr_Toshkentshahri_2.set('fieldAliases', {'fid': 'fid', 'ISO3166-2': 'ISO3166-2', });
lyr_maktablar_3.set('fieldAliases', {'fid': 'fid', 'nomi': 'nomi', 'tumani': 'tumani', });
lyr_oilaviypoliklinikalar_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nomi': 'nomi', });
lyr_15daqiqalikhudud_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Toshkentshahri_2.set('fieldImages', {'fid': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_maktablar_3.set('fieldImages', {'fid': 'TextEdit', 'nomi': 'TextEdit', 'tumani': '', });
lyr_oilaviypoliklinikalar_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nomi': 'TextEdit', });
lyr_15daqiqalikhudud_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Toshkentshahri_2.set('fieldLabels', {'fid': 'hidden field', 'ISO3166-2': 'hidden field', });
lyr_maktablar_3.set('fieldLabels', {'fid': 'hidden field', 'nomi': 'inline label - visible with data', 'tumani': 'hidden field', });
lyr_oilaviypoliklinikalar_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nomi': 'inline label - visible with data', });
lyr_15daqiqalikhudud_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'inline label - visible with data', });
lyr_15daqiqalikhudud_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});