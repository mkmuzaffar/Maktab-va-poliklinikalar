ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([7685380.338396, 5031085.904468, 7748006.182981, 5074960.255471]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Tashkentlayertashkent_2 = new ol.format.GeoJSON();
var features_Tashkentlayertashkent_2 = format_Tashkentlayertashkent_2.readFeatures(json_Tashkentlayertashkent_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tashkentlayertashkent_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tashkentlayertashkent_2.addFeatures(features_Tashkentlayertashkent_2);
var lyr_Tashkentlayertashkent_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tashkentlayertashkent_2, 
                style: style_Tashkentlayertashkent_2,
                popuplayertitle: "Tashkent layer — tashkent",
                interactive: true,
                title: '<img src="styles/legend/Tashkentlayertashkent_2.png" /> Tashkent layer — tashkent'
            });
var format_makpol15daqdissolved15__dissolved_3 = new ol.format.GeoJSON();
var features_makpol15daqdissolved15__dissolved_3 = format_makpol15daqdissolved15__dissolved_3.readFeatures(json_makpol15daqdissolved15__dissolved_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_makpol15daqdissolved15__dissolved_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_makpol15daqdissolved15__dissolved_3.addFeatures(features_makpol15daqdissolved15__dissolved_3);
var lyr_makpol15daqdissolved15__dissolved_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_makpol15daqdissolved15__dissolved_3, 
                style: style_makpol15daqdissolved15__dissolved_3,
                popuplayertitle: "mak pol 15 daq — dissolved15__dissolved",
                interactive: true,
                title: '<img src="styles/legend/makpol15daqdissolved15__dissolved_3.png" /> mak pol 15 daq — dissolved15__dissolved'
            });
var format_maktablarjoylarimaktab_nuqta_4 = new ol.format.GeoJSON();
var features_maktablarjoylarimaktab_nuqta_4 = format_maktablarjoylarimaktab_nuqta_4.readFeatures(json_maktablarjoylarimaktab_nuqta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maktablarjoylarimaktab_nuqta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maktablarjoylarimaktab_nuqta_4.addFeatures(features_maktablarjoylarimaktab_nuqta_4);cluster_maktablarjoylarimaktab_nuqta_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_maktablarjoylarimaktab_nuqta_4
});
var lyr_maktablarjoylarimaktab_nuqta_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_maktablarjoylarimaktab_nuqta_4, 
                style: style_maktablarjoylarimaktab_nuqta_4,
                popuplayertitle: "maktablar joylari — maktab_nuqta",
                interactive: true,
                title: '<img src="styles/legend/maktablarjoylarimaktab_nuqta_4.png" /> maktablar joylari — maktab_nuqta'
            });
var format_poliklinikanuqtalar_5 = new ol.format.GeoJSON();
var features_poliklinikanuqtalar_5 = format_poliklinikanuqtalar_5.readFeatures(json_poliklinikanuqtalar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poliklinikanuqtalar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poliklinikanuqtalar_5.addFeatures(features_poliklinikanuqtalar_5);cluster_poliklinikanuqtalar_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_poliklinikanuqtalar_5
});
var lyr_poliklinikanuqtalar_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_poliklinikanuqtalar_5, 
                style: style_poliklinikanuqtalar_5,
                popuplayertitle: "poliklinika nuqtalar",
                interactive: true,
                title: '<img src="styles/legend/poliklinikanuqtalar_5.png" /> poliklinika nuqtalar'
            });
var format_poliklinikajoylaripoliklinika_nuqta__joy_6 = new ol.format.GeoJSON();
var features_poliklinikajoylaripoliklinika_nuqta__joy_6 = format_poliklinikajoylaripoliklinika_nuqta__joy_6.readFeatures(json_poliklinikajoylaripoliklinika_nuqta__joy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poliklinikajoylaripoliklinika_nuqta__joy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poliklinikajoylaripoliklinika_nuqta__joy_6.addFeatures(features_poliklinikajoylaripoliklinika_nuqta__joy_6);cluster_poliklinikajoylaripoliklinika_nuqta__joy_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_poliklinikajoylaripoliklinika_nuqta__joy_6
});
var lyr_poliklinikajoylaripoliklinika_nuqta__joy_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_poliklinikajoylaripoliklinika_nuqta__joy_6, 
                style: style_poliklinikajoylaripoliklinika_nuqta__joy_6,
                popuplayertitle: "poliklinika joylari — poliklinika_nuqta__joy",
                interactive: true,
                title: '<img src="styles/legend/poliklinikajoylaripoliklinika_nuqta__joy_6.png" /> poliklinika joylari — poliklinika_nuqta__joy'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Tashkentlayertashkent_2.setVisible(true);lyr_makpol15daqdissolved15__dissolved_3.setVisible(true);lyr_maktablarjoylarimaktab_nuqta_4.setVisible(true);lyr_poliklinikanuqtalar_5.setVisible(true);lyr_poliklinikajoylaripoliklinika_nuqta__joy_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,lyr_Tashkentlayertashkent_2,lyr_makpol15daqdissolved15__dissolved_3,lyr_maktablarjoylarimaktab_nuqta_4,lyr_poliklinikanuqtalar_5,lyr_poliklinikajoylaripoliklinika_nuqta__joy_6];
lyr_Tashkentlayertashkent_2.set('fieldAliases', {'fid': 'fid', 'ISO3166-2': 'ISO3166-2', 'addr_count': 'addr_count', 'addr_postc': 'addr_postc', 'addr_regio': 'addr_regio', 'admin_leve': 'admin_leve', 'alt_name_r': 'alt_name_r', 'alt_name_u': 'alt_name_u', 'alt_name_v': 'alt_name_v', 'border_typ': 'border_typ', 'boundary': 'boundary', 'capital': 'capital', 'capital_IS': 'capital_IS', 'int_name': 'int_name', 'is_in_coun': 'is_in_coun', 'name': 'name', 'name_ace': 'name_ace', 'name_af': 'name_af', 'name_am': 'name_am', 'name_ar': 'name_ar', 'name_az': 'name_az', 'name_be': 'name_be', 'name_be-ta': 'name_be-ta', 'name_bg': 'name_bg', 'name_bn': 'name_bn', 'name_bo': 'name_bo', 'name_br': 'name_br', 'name_bs': 'name_bs', 'name_ca': 'name_ca', 'name_ckb': 'name_ckb', 'name_crh': 'name_crh', 'name_cs': 'name_cs', 'name_cv': 'name_cv', 'name_cy': 'name_cy', 'name_da': 'name_da', 'name_de': 'name_de', 'name_el': 'name_el', 'name_en': 'name_en', 'name_eo': 'name_eo', 'name_es': 'name_es', 'name_et': 'name_et', 'name_eu': 'name_eu', 'name_fa': 'name_fa', 'name_fi': 'name_fi', 'name_fr': 'name_fr', 'name_fy': 'name_fy', 'name_ga': 'name_ga', 'name_gd': 'name_gd', 'name_gl': 'name_gl', 'name_he': 'name_he', 'name_hi': 'name_hi', 'name_hif': 'name_hif', 'name_hr': 'name_hr', 'name_hsb': 'name_hsb', 'name_ht': 'name_ht', 'name_hu': 'name_hu', 'name_hy': 'name_hy', 'name_id': 'name_id', 'name_ie': 'name_ie', 'name_io': 'name_io', 'name_is': 'name_is', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ka': 'name_ka', 'name_kaa': 'name_kaa', 'name_kk': 'name_kk', 'name_kn': 'name_kn', 'name_ko': 'name_ko', 'name_ku': 'name_ku', 'name_kv': 'name_kv', 'name_ky': 'name_ky', 'name_la': 'name_la', 'name_lmo': 'name_lmo', 'name_lt': 'name_lt', 'name_lv': 'name_lv', 'name_mhr': 'name_mhr', 'name_mk': 'name_mk', 'name_ml': 'name_ml', 'name_mn': 'name_mn', 'name_mr': 'name_mr', 'name_ms': 'name_ms', 'name_myv': 'name_myv', 'name_mzn': 'name_mzn', 'name_nan': 'name_nan', 'name_nl': 'name_nl', 'name_nn': 'name_nn', 'name_no': 'name_no', 'name_nov': 'name_nov', 'name_oc': 'name_oc', 'name_os': 'name_os', 'name_pl': 'name_pl', 'name_pms': 'name_pms', 'name_pnb': 'name_pnb', 'name_ps': 'name_ps', 'name_pt': 'name_pt', 'name_ro': 'name_ro', 'name_ru': 'name_ru', 'name_sah': 'name_sah', 'name_sco': 'name_sco', 'name_sh': 'name_sh', 'name_simpl': 'name_simpl', 'name_sk': 'name_sk', 'name_sq': 'name_sq', 'name_sr': 'name_sr', 'name_sv': 'name_sv', 'name_sw': 'name_sw', 'name_ta': 'name_ta', 'name_te': 'name_te', 'name_tg': 'name_tg', 'name_th': 'name_th', 'name_tk': 'name_tk', 'name_tl': 'name_tl', 'name_tlh': 'name_tlh', 'name_tr': 'name_tr', 'name_tt': 'name_tt', 'name_udm': 'name_udm', 'name_ug': 'name_ug', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_uz': 'name_uz', 'name_vec': 'name_vec', 'name_vep': 'name_vep', 'name_vi': 'name_vi', 'name_vo': 'name_vo', 'name_war': 'name_war', 'name_yi': 'name_yi', 'name_yo': 'name_yo', 'name_zh': 'name_zh', 'old_name': 'old_name', 'old_name_r': 'old_name_r', 'old_name_v': 'old_name_v', 'place': 'place', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_makpol15daqdissolved15__dissolved_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_maktablarjoylarimaktab_nuqta_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'telegram': 'telegram', 'facebook': 'facebook', 'contact_in': 'contact_in', 'contact_em': 'contact_em', 'religion': 'religion', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'grades': 'grades', 'contact_fa': 'contact_fa', 'emergency_': 'emergency_', 'door': 'door', 'maxwidth': 'maxwidth', 'language_e': 'language_e', 'name_kk': 'name_kk', 'addr_place': 'addr_place', 'motor_vehi': 'motor_vehi', 'access': 'access', 'contact_ph': 'contact_ph', 'office': 'office', 'descriptio': 'descriptio', 'building': 'building', 'addr_unit': 'addr_unit', 'addr_city': 'addr_city', 'check_date': 'check_date', 'phone': 'phone', 'opening_ho': 'opening_ho', 'name_tr': 'name_tr', 'name_en': 'name_en', 'email': 'email', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'ref': 'ref', 'website': 'website', 'dispensing': 'dispensing', 'entrance': 'entrance', 'alt_name': 'alt_name', 'historic': 'historic', 'school': 'school', 'name_uz': 'name_uz', 'name_ru': 'name_ru', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'operator': 'operator', 'barrier': 'barrier', 'name': 'name', 'highway': 'highway', 'bench': 'bench', 'addr_postc': 'addr_postc', });
lyr_poliklinikanuqtalar_5.set('fieldAliases', {'id': 'id', });
lyr_poliklinikajoylaripoliklinika_nuqta__joy_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nomi': 'nomi', });
lyr_Tashkentlayertashkent_2.set('fieldImages', {'fid': 'TextEdit', 'ISO3166-2': 'TextEdit', 'addr_count': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_regio': 'TextEdit', 'admin_leve': 'TextEdit', 'alt_name_r': 'TextEdit', 'alt_name_u': 'TextEdit', 'alt_name_v': 'TextEdit', 'border_typ': 'TextEdit', 'boundary': 'TextEdit', 'capital': 'TextEdit', 'capital_IS': 'TextEdit', 'int_name': 'TextEdit', 'is_in_coun': 'TextEdit', 'name': 'TextEdit', 'name_ace': 'TextEdit', 'name_af': 'TextEdit', 'name_am': 'TextEdit', 'name_ar': 'TextEdit', 'name_az': 'TextEdit', 'name_be': 'TextEdit', 'name_be-ta': 'TextEdit', 'name_bg': 'TextEdit', 'name_bn': 'TextEdit', 'name_bo': 'TextEdit', 'name_br': 'TextEdit', 'name_bs': 'TextEdit', 'name_ca': 'TextEdit', 'name_ckb': 'TextEdit', 'name_crh': 'TextEdit', 'name_cs': 'TextEdit', 'name_cv': 'TextEdit', 'name_cy': 'TextEdit', 'name_da': 'TextEdit', 'name_de': 'TextEdit', 'name_el': 'TextEdit', 'name_en': 'TextEdit', 'name_eo': 'TextEdit', 'name_es': 'TextEdit', 'name_et': 'TextEdit', 'name_eu': 'TextEdit', 'name_fa': 'TextEdit', 'name_fi': 'TextEdit', 'name_fr': 'TextEdit', 'name_fy': 'TextEdit', 'name_ga': 'TextEdit', 'name_gd': 'TextEdit', 'name_gl': 'TextEdit', 'name_he': 'TextEdit', 'name_hi': 'TextEdit', 'name_hif': 'TextEdit', 'name_hr': 'TextEdit', 'name_hsb': 'TextEdit', 'name_ht': 'TextEdit', 'name_hu': 'TextEdit', 'name_hy': 'TextEdit', 'name_id': 'TextEdit', 'name_ie': 'TextEdit', 'name_io': 'TextEdit', 'name_is': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ka': 'TextEdit', 'name_kaa': 'TextEdit', 'name_kk': 'TextEdit', 'name_kn': 'TextEdit', 'name_ko': 'TextEdit', 'name_ku': 'TextEdit', 'name_kv': 'TextEdit', 'name_ky': 'TextEdit', 'name_la': 'TextEdit', 'name_lmo': 'TextEdit', 'name_lt': 'TextEdit', 'name_lv': 'TextEdit', 'name_mhr': 'TextEdit', 'name_mk': 'TextEdit', 'name_ml': 'TextEdit', 'name_mn': 'TextEdit', 'name_mr': 'TextEdit', 'name_ms': 'TextEdit', 'name_myv': 'TextEdit', 'name_mzn': 'TextEdit', 'name_nan': 'TextEdit', 'name_nl': 'TextEdit', 'name_nn': 'TextEdit', 'name_no': 'TextEdit', 'name_nov': 'TextEdit', 'name_oc': 'TextEdit', 'name_os': 'TextEdit', 'name_pl': 'TextEdit', 'name_pms': 'TextEdit', 'name_pnb': 'TextEdit', 'name_ps': 'TextEdit', 'name_pt': 'TextEdit', 'name_ro': 'TextEdit', 'name_ru': 'TextEdit', 'name_sah': 'TextEdit', 'name_sco': 'TextEdit', 'name_sh': 'TextEdit', 'name_simpl': 'TextEdit', 'name_sk': 'TextEdit', 'name_sq': 'TextEdit', 'name_sr': 'TextEdit', 'name_sv': 'TextEdit', 'name_sw': 'TextEdit', 'name_ta': 'TextEdit', 'name_te': 'TextEdit', 'name_tg': 'TextEdit', 'name_th': 'TextEdit', 'name_tk': 'TextEdit', 'name_tl': 'TextEdit', 'name_tlh': 'TextEdit', 'name_tr': 'TextEdit', 'name_tt': 'TextEdit', 'name_udm': 'TextEdit', 'name_ug': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_uz': 'TextEdit', 'name_vec': 'TextEdit', 'name_vep': 'TextEdit', 'name_vi': 'TextEdit', 'name_vo': 'TextEdit', 'name_war': 'TextEdit', 'name_yi': 'TextEdit', 'name_yo': 'TextEdit', 'name_zh': 'TextEdit', 'old_name': 'TextEdit', 'old_name_r': 'TextEdit', 'old_name_v': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_makpol15daqdissolved15__dissolved_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_maktablarjoylarimaktab_nuqta_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'telegram': 'TextEdit', 'facebook': 'TextEdit', 'contact_in': 'TextEdit', 'contact_em': 'TextEdit', 'religion': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'grades': 'TextEdit', 'contact_fa': 'TextEdit', 'emergency_': 'TextEdit', 'door': 'TextEdit', 'maxwidth': 'TextEdit', 'language_e': 'TextEdit', 'name_kk': 'TextEdit', 'addr_place': 'TextEdit', 'motor_vehi': 'TextEdit', 'access': 'TextEdit', 'contact_ph': 'TextEdit', 'office': 'TextEdit', 'descriptio': 'TextEdit', 'building': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_city': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'name_tr': 'TextEdit', 'name_en': 'TextEdit', 'email': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'ref': 'TextEdit', 'website': 'TextEdit', 'dispensing': 'TextEdit', 'entrance': 'TextEdit', 'alt_name': 'TextEdit', 'historic': 'TextEdit', 'school': 'TextEdit', 'name_uz': 'TextEdit', 'name_ru': 'TextEdit', 'motorcycle': 'TextEdit', 'motorcar': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'bench': 'TextEdit', 'addr_postc': 'TextEdit', });
lyr_poliklinikanuqtalar_5.set('fieldImages', {'id': 'TextEdit', });
lyr_poliklinikajoylaripoliklinika_nuqta__joy_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nomi': 'TextEdit', });
lyr_Tashkentlayertashkent_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'ISO3166-2': 'inline label - visible with data', 'addr_count': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'addr_regio': 'inline label - visible with data', 'admin_leve': 'inline label - visible with data', 'alt_name_r': 'inline label - visible with data', 'alt_name_u': 'inline label - visible with data', 'alt_name_v': 'inline label - visible with data', 'border_typ': 'inline label - visible with data', 'boundary': 'inline label - visible with data', 'capital': 'inline label - visible with data', 'capital_IS': 'inline label - visible with data', 'int_name': 'inline label - visible with data', 'is_in_coun': 'inline label - visible with data', 'name': 'inline label - visible with data', 'name_ace': 'inline label - visible with data', 'name_af': 'inline label - visible with data', 'name_am': 'inline label - visible with data', 'name_ar': 'inline label - visible with data', 'name_az': 'inline label - visible with data', 'name_be': 'inline label - visible with data', 'name_be-ta': 'inline label - visible with data', 'name_bg': 'inline label - visible with data', 'name_bn': 'inline label - visible with data', 'name_bo': 'inline label - visible with data', 'name_br': 'inline label - visible with data', 'name_bs': 'inline label - visible with data', 'name_ca': 'inline label - visible with data', 'name_ckb': 'inline label - visible with data', 'name_crh': 'inline label - visible with data', 'name_cs': 'inline label - visible with data', 'name_cv': 'inline label - visible with data', 'name_cy': 'inline label - visible with data', 'name_da': 'inline label - visible with data', 'name_de': 'inline label - visible with data', 'name_el': 'inline label - visible with data', 'name_en': 'inline label - visible with data', 'name_eo': 'inline label - visible with data', 'name_es': 'inline label - visible with data', 'name_et': 'inline label - visible with data', 'name_eu': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'name_fi': 'inline label - visible with data', 'name_fr': 'inline label - visible with data', 'name_fy': 'inline label - visible with data', 'name_ga': 'inline label - visible with data', 'name_gd': 'inline label - visible with data', 'name_gl': 'inline label - visible with data', 'name_he': 'inline label - visible with data', 'name_hi': 'inline label - visible with data', 'name_hif': 'inline label - visible with data', 'name_hr': 'inline label - visible with data', 'name_hsb': 'inline label - visible with data', 'name_ht': 'inline label - visible with data', 'name_hu': 'inline label - visible with data', 'name_hy': 'inline label - visible with data', 'name_id': 'inline label - visible with data', 'name_ie': 'inline label - visible with data', 'name_io': 'inline label - visible with data', 'name_is': 'inline label - visible with data', 'name_it': 'inline label - visible with data', 'name_ja': 'inline label - visible with data', 'name_ka': 'inline label - visible with data', 'name_kaa': 'inline label - visible with data', 'name_kk': 'inline label - visible with data', 'name_kn': 'inline label - visible with data', 'name_ko': 'inline label - visible with data', 'name_ku': 'inline label - visible with data', 'name_kv': 'inline label - visible with data', 'name_ky': 'inline label - visible with data', 'name_la': 'inline label - visible with data', 'name_lmo': 'inline label - visible with data', 'name_lt': 'inline label - visible with data', 'name_lv': 'inline label - visible with data', 'name_mhr': 'inline label - visible with data', 'name_mk': 'inline label - visible with data', 'name_ml': 'inline label - visible with data', 'name_mn': 'inline label - visible with data', 'name_mr': 'inline label - visible with data', 'name_ms': 'inline label - visible with data', 'name_myv': 'inline label - visible with data', 'name_mzn': 'inline label - visible with data', 'name_nan': 'inline label - visible with data', 'name_nl': 'inline label - visible with data', 'name_nn': 'inline label - visible with data', 'name_no': 'inline label - visible with data', 'name_nov': 'inline label - visible with data', 'name_oc': 'inline label - visible with data', 'name_os': 'inline label - visible with data', 'name_pl': 'inline label - visible with data', 'name_pms': 'inline label - visible with data', 'name_pnb': 'inline label - visible with data', 'name_ps': 'inline label - visible with data', 'name_pt': 'inline label - visible with data', 'name_ro': 'inline label - visible with data', 'name_ru': 'inline label - visible with data', 'name_sah': 'inline label - visible with data', 'name_sco': 'inline label - visible with data', 'name_sh': 'inline label - visible with data', 'name_simpl': 'inline label - visible with data', 'name_sk': 'inline label - visible with data', 'name_sq': 'inline label - visible with data', 'name_sr': 'inline label - visible with data', 'name_sv': 'inline label - visible with data', 'name_sw': 'inline label - visible with data', 'name_ta': 'inline label - visible with data', 'name_te': 'inline label - visible with data', 'name_tg': 'inline label - visible with data', 'name_th': 'inline label - visible with data', 'name_tk': 'inline label - visible with data', 'name_tl': 'inline label - visible with data', 'name_tlh': 'inline label - visible with data', 'name_tr': 'inline label - visible with data', 'name_tt': 'inline label - visible with data', 'name_udm': 'inline label - visible with data', 'name_ug': 'inline label - visible with data', 'name_uk': 'inline label - visible with data', 'name_ur': 'inline label - visible with data', 'name_uz': 'inline label - visible with data', 'name_vec': 'inline label - visible with data', 'name_vep': 'inline label - visible with data', 'name_vi': 'inline label - visible with data', 'name_vo': 'inline label - visible with data', 'name_war': 'inline label - visible with data', 'name_yi': 'inline label - visible with data', 'name_yo': 'inline label - visible with data', 'name_zh': 'inline label - visible with data', 'old_name': 'inline label - visible with data', 'old_name_r': 'inline label - visible with data', 'old_name_v': 'inline label - visible with data', 'place': 'inline label - visible with data', 'type': 'inline label - visible with data', 'wikidata': 'inline label - visible with data', 'wikipedia': 'inline label - visible with data', });
lyr_makpol15daqdissolved15__dissolved_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'inline label - visible with data', });
lyr_maktablarjoylarimaktab_nuqta_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'amenity': 'inline label - visible with data', 'telegram': 'inline label - visible with data', 'facebook': 'inline label - visible with data', 'contact_in': 'inline label - visible with data', 'contact_em': 'inline label - visible with data', 'religion': 'inline label - visible with data', 'internet_a': 'inline label - visible with data', 'internet_1': 'inline label - visible with data', 'grades': 'inline label - visible with data', 'contact_fa': 'inline label - visible with data', 'emergency_': 'inline label - visible with data', 'door': 'inline label - visible with data', 'maxwidth': 'inline label - visible with data', 'language_e': 'inline label - visible with data', 'name_kk': 'inline label - visible with data', 'addr_place': 'inline label - visible with data', 'motor_vehi': 'inline label - visible with data', 'access': 'inline label - visible with data', 'contact_ph': 'inline label - visible with data', 'office': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'building': 'inline label - visible with data', 'addr_unit': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'check_date': 'inline label - visible with data', 'phone': 'inline label - visible with data', 'opening_ho': 'inline label - visible with data', 'name_tr': 'inline label - visible with data', 'name_en': 'inline label - visible with data', 'email': 'inline label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_house': 'inline label - visible with data', 'ref': 'inline label - visible with data', 'website': 'inline label - visible with data', 'dispensing': 'inline label - visible with data', 'entrance': 'inline label - visible with data', 'alt_name': 'inline label - visible with data', 'historic': 'inline label - visible with data', 'school': 'inline label - visible with data', 'name_uz': 'inline label - visible with data', 'name_ru': 'inline label - visible with data', 'motorcycle': 'inline label - visible with data', 'motorcar': 'inline label - visible with data', 'horse': 'inline label - visible with data', 'foot': 'inline label - visible with data', 'bicycle': 'inline label - visible with data', 'operator': 'inline label - visible with data', 'barrier': 'inline label - visible with data', 'name': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'bench': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', });
lyr_poliklinikanuqtalar_5.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_poliklinikajoylaripoliklinika_nuqta__joy_6.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'nomi': 'inline label - always visible', });
lyr_poliklinikajoylaripoliklinika_nuqta__joy_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});