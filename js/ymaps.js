YMaps.jQuery(function(){var a=new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);window.matchMedia("(max-width: 1300px)").matches?a.setCenter(new YMaps.GeoPoint(30.3230545,59.93863106),16):a.setCenter(new YMaps.GeoPoint(30.3130545,59.93863106),16);var e=new YMaps.Placemark(new YMaps.GeoPoint(30.3230545,59.93863106),{iconImageHref:"../img/map-pin.png",iconImageSize:[40,41],draggable:0,hintOptions:{maxWidth:100,showTimeout:200,offset:new YMaps.Point(5,5)},balloonOptions:{maxWidth:70,hasCloseButton:!1,mapAutoPan:0}});e.name="CatEnergy",e.description="",a.addOverlay(e)});