ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5367").setExtent([485051.505988, 1092125.987685, 499613.374190, 1104538.157756]);
var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_LmiteCantonal_1 = new ol.format.GeoJSON();
var features_LmiteCantonal_1 = format_LmiteCantonal_1.readFeatures(json_LmiteCantonal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_LmiteCantonal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteCantonal_1.addFeatures(features_LmiteCantonal_1);
var lyr_LmiteCantonal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteCantonal_1, 
                style: style_LmiteCantonal_1,
                popuplayertitle: 'Límite Cantonal',
                interactive: true,
                title: '<img src="styles/legend/LmiteCantonal_1.png" /> Límite Cantonal'
            });
var format_Edificios_2 = new ol.format.GeoJSON();
var features_Edificios_2 = format_Edificios_2.readFeatures(json_Edificios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Edificios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificios_2.addFeatures(features_Edificios_2);
var lyr_Edificios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificios_2, 
                style: style_Edificios_2,
                popuplayertitle: 'Edificios',
                interactive: true,
    title: 'Edificios<br />\
    <img src="styles/legend/Edificios_2_0.png" /> Educativo<br />\
    <img src="styles/legend/Edificios_2_1.png" /> Iglesia<br />\
    <img src="styles/legend/Edificios_2_2.png" /> Legislativo<br />\
    <img src="styles/legend/Edificios_2_3.png" /> Museo<br />\
    <img src="styles/legend/Edificios_2_4.png" /> Patrimonio<br />\
    <img src="styles/legend/Edificios_2_5.png" /> <br />' });
var format_Cantonescolindantes_3 = new ol.format.GeoJSON();
var features_Cantonescolindantes_3 = format_Cantonescolindantes_3.readFeatures(json_Cantonescolindantes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Cantonescolindantes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantonescolindantes_3.addFeatures(features_Cantonescolindantes_3);
var lyr_Cantonescolindantes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantonescolindantes_3, 
                style: style_Cantonescolindantes_3,
                popuplayertitle: 'Cantones colindantes',
                interactive: true,
                title: '<img src="styles/legend/Cantonescolindantes_3.png" /> Cantones colindantes'
            });

lyr_MapaBase_0.setVisible(true);lyr_LmiteCantonal_1.setVisible(true);lyr_Edificios_2.setVisible(true);lyr_Cantonescolindantes_3.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_LmiteCantonal_1,lyr_Edificios_2,lyr_Cantonescolindantes_3];
lyr_LmiteCantonal_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM_PROV': 'NOM_PROV', 'NOM_CANT_1': 'NOM_CANT_1', });
lyr_Edificios_2.set('fieldAliases', {'fid': 'fid', 'Edificios': 'Edificios', 'Descripción': 'Descripción', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fotografía': 'Fotografía', 'Categoria': 'Categoria', });
lyr_Cantonescolindantes_3.set('fieldAliases', {'NCANTON': 'NCANTON', 'CODNUM': 'CODNUM', 'NPROVINCIA': 'NPROVINCIA', 'PROV': 'PROV', 'CANTO': 'CANTO', 'POB_2000_H': 'POB_2000_H', 'POB_2000_M': 'POB_2000_M', 'VIVIENDA_O': 'VIVIENDA_O', 'VIVIENDA_D': 'VIVIENDA_D', 'VIVIENDA_C': 'VIVIENDA_C', 'HECTARES': 'HECTARES', 'POB_2011_H': 'POB_2011_H', 'POB_2011_M': 'POB_2011_M', 'VIV_O_2011': 'VIV_O_2011', 'VIV_D_2011': 'VIV_D_2011', 'VIV_C_2011': 'VIV_C_2011', });
lyr_LmiteCantonal_1.set('fieldImages', {'OBJECTID': 'Range', 'NOM_PROV': 'TextEdit', 'NOM_CANT_1': 'TextEdit', });
lyr_Edificios_2.set('fieldImages', {'fid': 'TextEdit', 'Edificios': 'TextEdit', 'Descripción': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fotografía': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Cantonescolindantes_3.set('fieldImages', {'NCANTON': 'TextEdit', 'CODNUM': 'Range', 'NPROVINCIA': 'TextEdit', 'PROV': 'TextEdit', 'CANTO': 'TextEdit', 'POB_2000_H': 'TextEdit', 'POB_2000_M': 'TextEdit', 'VIVIENDA_O': 'TextEdit', 'VIVIENDA_D': 'TextEdit', 'VIVIENDA_C': 'TextEdit', 'HECTARES': 'TextEdit', 'POB_2011_H': 'TextEdit', 'POB_2011_M': 'TextEdit', 'VIV_O_2011': 'TextEdit', 'VIV_D_2011': 'TextEdit', 'VIV_C_2011': 'TextEdit', });
lyr_LmiteCantonal_1.set('fieldLabels', {'OBJECTID': 'no label', 'NOM_PROV': 'header label - always visible', 'NOM_CANT_1': 'header label - always visible', });
lyr_Edificios_2.set('fieldLabels', {'fid': 'no label', 'Edificios': 'header label - always visible', 'Descripción': 'header label - always visible', 'Latitud': 'header label - always visible', 'Longitud': 'header label - always visible', 'Fotografía': 'header label - always visible', 'Categoria': 'no label', });
lyr_Cantonescolindantes_3.set('fieldLabels', {'NCANTON': 'header label - always visible', 'CODNUM': 'no label', 'NPROVINCIA': 'no label', 'PROV': 'header label - always visible', 'CANTO': 'header label - always visible', 'POB_2000_H': 'no label', 'POB_2000_M': 'no label', 'VIVIENDA_O': 'no label', 'VIVIENDA_D': 'no label', 'VIVIENDA_C': 'no label', 'HECTARES': 'no label', 'POB_2011_H': 'no label', 'POB_2011_M': 'no label', 'VIV_O_2011': 'no label', 'VIV_D_2011': 'no label', 'VIV_C_2011': 'no label', });
lyr_Cantonescolindantes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});