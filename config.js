var config = {
    style: 'mapbox://styles/rdiaz90/cmclt1429000301r851fw46o2',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicmRpYXo5MCIsImEiOiJjbWNscmc0bm4wYzlkMmxzYjU1eDJ2OXp6In0.iimcLLP_2dahVsXovsClHQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Los faros de La Palma',
    subtitle: 'Storymap de los faros de La Palma, Islas Canarias',
    byline: 'Rubén Díaz Grano de Oro',
    footer: 'Fuente: Datos abiertos del Gobierno de España. <br> Creado utilizando la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Fuencaliente',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/At_La_Palma_2020_247.jpg/960px-At_La_Palma_2020_247.jpg',
            description: 'El faro de Fuencaliente se encuentra en la punta sur de la isla de La Palma (Canarias, España), en el municipio de Fuencaliente. Se encuentra en el parque natural de Cumbre Vieja y a su alrededor se encuentran las Salinas de Fuencaliente, las playas del Faro de Fuencaliente, la de Echentive y la antigua Fuente Santa.',
            location: {
                center: [-17.84309336250838, 28.455293634051856],
                zoom: 12.91,
                pitch: 73,
                bearing: -8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Faro de Punta Cumplida',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Faro_de_Punta_Cumplida.jpg/960px-Faro_de_Punta_Cumplida.jpg',
            description: 'El faro de Punta Cumplida es un faro situado en la localidad de Barlovento, en la isla de La Palma (provincia de Santa Cruz de Tenerife, Canarias, España).',
            location: {
                center: [-17.77806539222687, 28.83907242018376],
                zoom: 11.87,
                pitch: 80.10,
                bearing: -153.35,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Punta Lava',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Faro_de_Punta_Lava_2014-11.JPG/1280px-Faro_de_Punta_Lava_2014-11.JPG',
            description: 'El faro de Punta Lava o faro de Punta del Moro es un faro situado en Tazacorte, al oeste de la isla de La Palma, en el archipiélago de las Islas Canarias, España.',
            location: {
                center: [-17.925675407031026, 28.596691453861357],
                zoom: 11.84,
                pitch: 67.50,
                bearing: 60.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Faro de Arenas Blancas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Faro_de_Arenas_Blancas_2014-11.JPG',
            description: 'El faro de Arenas Blancas es un faro situado en la playa de Arenas Blancas, a 4 kilómetros al sureste de Lomo Oscuro, en la isla de La Palma, en el archipiélago de las Islas Canarias, España.',
            location: {
                center: [-17.760483100341396, 28.56991931536347],
                zoom: 11.26,
                pitch: 74.50,
                bearing: -80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
