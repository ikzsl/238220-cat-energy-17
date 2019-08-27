// Создает обработчик события window.onLoad
    YMaps.jQuery(function () {
      // Создает экземпляр карты и привязывает его к созданному контейнеру
      var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);



      if (window.matchMedia('(max-width: 1300px)').matches) {
        // do functionality on screens smaller than 768px
        map.setCenter(new YMaps.GeoPoint(30.32305450, 59.93863106), 16);
      }
      else {
        map.setCenter(new YMaps.GeoPoint(30.31305450, 59.93863106), 16);
      }

      // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования


      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.32305450, 59.93863106), {
        iconImageHref: '../img/map-pin.png',
        iconImageSize: [40, 41],
        draggable: 0,
        hintOptions: {
          maxWidth: 100,
          showTimeout: 200,
          offset: new YMaps.Point(5, 5)
        },
        balloonOptions: {
          maxWidth: 70,
          hasCloseButton: false,
          mapAutoPan: 0
        }
      });
      placemark.name = "CatEnergy";
      placemark.description = "";
      map.addOverlay(placemark);

    })
