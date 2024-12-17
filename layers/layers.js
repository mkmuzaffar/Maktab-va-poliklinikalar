ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([7686415.742422, 5034189.087763, 7742841.121364, 5072089.401771]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Toshkentshahri_1 = new ol.format.GeoJSON();
var features_Toshkentshahri_1 = format_Toshkentshahri_1.readFeatures(json_Toshkentshahri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toshkentshahri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toshkentshahri_1.addFeatures(features_Toshkentshahri_1);
var lyr_Toshkentshahri_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toshkentshahri_1, 
                style: style_Toshkentshahri_1,
                popuplayertitle: "Toshkent shahri",
                interactive: false,
                title: '<img src="styles/legend/Toshkentshahri_1.png" /> Toshkent shahri'
            });
var format_15daqiqalikhudud_2 = new ol.format.GeoJSON();
var features_15daqiqalikhudud_2 = format_15daqiqalikhudud_2.readFeatures(json_15daqiqalikhudud_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15daqiqalikhudud_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15daqiqalikhudud_2.addFeatures(features_15daqiqalikhudud_2);
var lyr_15daqiqalikhudud_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15daqiqalikhudud_2, 
                style: style_15daqiqalikhudud_2,
                popuplayertitle: "15 daqiqalik hudud",
                interactive: false,
                title: '<img src="styles/legend/15daqiqalikhudud_2.png" /> 15 daqiqalik hudud'
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Toshkentshahri_1.setVisible(true);lyr_15daqiqalikhudud_2.setVisible(true);lyr_maktablar_3.setVisible(true);lyr_oilaviypoliklinikalar_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Toshkentshahri_1,lyr_15daqiqalikhudud_2,lyr_maktablar_3,lyr_oilaviypoliklinikalar_4];
lyr_Toshkentshahri_1.set('fieldAliases', {'fid': 'fid', 'ISO3166-2': 'ISO3166-2', });
lyr_15daqiqalikhudud_2.set('fieldAliases', {'fid': 'fid', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'fid_2': 'fid_2', 'CENTER_L_1': 'CENTER_L_1', 'CENTER_L_2': 'CENTER_L_2', 'AA_MINS_2': 'AA_MINS_2', 'AA_MODE_2': 'AA_MODE_2', 'TOTAL_POP_': 'TOTAL_POP_', });
lyr_maktablar_3.set('fieldAliases', {'fid': 'fid', 'nomi': 'nomi', 'tumani': 'tumani', });
lyr_oilaviypoliklinikalar_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nomi': 'nomi', });
lyr_Toshkentshahri_1.set('fieldImages', {'fid': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_15daqiqalikhudud_2.set('fieldImages', {'fid': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'fid_2': 'TextEdit', 'CENTER_L_1': 'TextEdit', 'CENTER_L_2': 'TextEdit', 'AA_MINS_2': 'TextEdit', 'AA_MODE_2': 'TextEdit', 'TOTAL_POP_': 'TextEdit', });
lyr_maktablar_3.set('fieldImages', {'fid': 'TextEdit', 'nomi': 'TextEdit', 'tumani': 'TextEdit', });
lyr_oilaviypoliklinikalar_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nomi': 'TextEdit', });
lyr_Toshkentshahri_1.set('fieldLabels', {'fid': 'hidden field', 'ISO3166-2': 'hidden field', });
lyr_15daqiqalikhudud_2.set('fieldLabels', {'fid': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'fid_2': 'no label', 'CENTER_L_1': 'no label', 'CENTER_L_2': 'no label', 'AA_MINS_2': 'no label', 'AA_MODE_2': 'no label', 'TOTAL_POP_': 'no label', });
lyr_maktablar_3.set('fieldLabels', {'fid': 'hidden field', 'nomi': 'inline label - visible with data', 'tumani': 'hidden field', });
lyr_oilaviypoliklinikalar_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nomi': 'inline label - visible with data', });
lyr_oilaviypoliklinikalar_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});