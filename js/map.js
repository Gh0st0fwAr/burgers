
ymaps.ready(init);
function init() {
    const burMap = new ymaps.Map("map", {
        center: [59.93116859, 30.35424297],
        zoom: 11
    })

    burMap.behaviors.disable('scrollZoom');
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(burMap.getCenter(), {
        hintContent: 'Адрес ресторана',
        balloonContent: 'Описание ресторана'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [46, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-23, -57]
    }),

    myPlacemarkTwo = new ymaps.Placemark([59.93185472, 30.44025404], {
        hintContent: 'Другой адрес ресторана',
        balloonContent: 'Другое описание ресторана',
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    myPlacemarkThree = new ymaps.Placemark([59.90660217, 30.29878938], {
        hintContent: 'Ресторан на балтийском',
        balloonContent: 'Не лучшая станция метро',
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    myPlacemarkFour = new ymaps.Placemark([59.90767413, 30.22631789], {
        hintContent: 'Ресторан на КСЗ',
        balloonContent: 'Какому гению вообще пришло в голову строить ресторан на канонерке?',
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

burMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkTwo)
    .add(myPlacemarkThree)
    .add(myPlacemarkFour);
}