var config = {
    //style: 'mapbox://styles/alexabento/cmd3k58zl006601sd96dbasvo',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWxleGFiZW50byIsImEiOiJjbWQzYnQ4em8wMnFxMmtzNTZwY2Q1dHl3In0.5V_-rcQfm4ni7xcOSwwYSQ',
    showMarkers: true,
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
    title: 'Carnavales de España',
    subtitle: '',
    byline: 'Por Alexandra Penayo Bento',
    footer: 'Fuente: <a href="https://esblog.eveniahotels.com/los-mejores-carnavales-de-espana/">Los mejores carnavales de España: Una guía para vivir el carnaval</a> <br>'+
    'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'portada',
            alignment: 'fully',
            hidden: false,
            title: '',
            //image: './assets/Carnaval-Portada.jpg',
            description: 'España alberga algunos de los carnavales más famosos del mundo, con sus propias características y tradiciones. Aquí se presenta una selección de los mejores carnavales de España para vivir una experiencia inolvidable.',
            location: {
                center: [-3.14250, 40.49458],
                zoom: 4.10,
                pitch: 0,
                bearing: 0
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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Badajoz',
            subtitle: 'Extremadura',
            image: './assets/BADAJOZ.jpg',
            description: '<b>Fechas: Febrero, durante un fin de semana largo.</b><br>'+
            'La primera parada se vive en un ambiente vibrante y familiar, el Carnaval de Badajoz, uno de los mejores carnavales de España y uno de los más importantes de la península.<br>'+
            '<b>Actividades destacadas:</b>'+
            '<ul><li>Desfile de comparsas</li>'+
            '<li>Concurso de murgas</li>'+
            '<li>Fiesta nocturna en el casco antiguo</li></ul>',
            location: {
                center: [-6.970392572124311, 38.8782940741699],
                zoom: 10.52,
                pitch: 8.01,
                bearing: 0.00
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
            title: 'Carnaval de Cádiz',
            subtitle: 'Andalucía',
            image: './assets/CADIZ1.jpg',
            description: '<b>Fechas: Febrero, con una duración aproximada de 10 días.</b><br>'+
            'Pasamos a otro de que encuentra entre los mejores carnavales, el famoso Carnaval de Cádiz. Su humor y creatividad lo convierten en una auténtica fiesta de ingenio. Sus chirigotas y comparsas llenan las calles con canciones satíricas y divertidas.<br>'+
            '<b>Actividades destacadas:</b>'+
            '<ul><li>Concurso oficial de agrupaciones en el Gran Teatro Falla</li>'+
            '<li>Desfiles callejeros</li>'+
            '<li>Actuaciones espontáneas en las plazas</li></ul>',
            location: {
                center: [-6.278555818584515, 36.516807512216815],
                zoom: 10,
                pitch: 0,
                bearing: 0
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
            title: 'Carnaval de Sitges',
            subtitle: 'Cataluña',
            image: './assets/STIGES.jpg',
            description: '<b>Fechas: Febrero, con especial énfasis en el fin de semana.</b><br>'+
            'A orillas del mar Mediterráneo se celebra el Carnaval de Sitges, conocido por su ambiente inclusivo y sus fiestas llenas de glamour.<br>'+
            '<b>Actividades destacadas:</b>'+
            '<ul><li>Desfiles del “Rey Carnestoltes” y la “Reina del Carnaval”</li>'+
            '<li>Ruas nocturnas</li>'+
            '<li>Fiestas temáticas en bares y discotecas</li></ul>',
            location: {
                center: [1.823476010542251, 41.237353320750046],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Carnaval de Águilas',
            subtitle: 'Murcia',
            image: './assets/AGUILAS1.jpg',
            description: '<b>Fechas: Finales de febrero o principios de marzo.</b><br>'+
            'No podía faltar el situado en Murcia, un carnaval que destaca por su espectacularidad y entusiasmo.<br>'+
            '<b>Actividades destacadas:</b>'+
            '<ul><li>Batalla de cascarones de huevo</li>'+
            '<li>Grandes desfiles llenos de fantasía</li>'+
            '<li>Concurso de trajes y carrozas</li></ul>',
            location: {
                center: [-1.5816071916622931, 37.40805465050592],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Santa Cruz de Tenerife',
            subtitle: 'Canarias',
            image: './assets/SANTACRUZ.jpeg',
            description: '<b>Fechas: Febrero, culminando con el gran desfile del martes de Carnaval.</b><br>'+
            'Saliendo de la península, en las islas Canarias, se encuentra uno de los carnavales más grandes del mundo. Destaca por sus majestuosos desfiles, reinas de carnaval y espectáculos.<br>'+
            '<b>Actividades destacadas:</b>'+
            '<ul><li>Gala de elección de la Reina del Carnaval</li>'+
            '<li>Coso Apoteosis, un desfile espectacular</li>'+
            '<li>El Entierro de la Sardina</li></ul>',
            location: {
                center: [-16.254597768776332, 28.467037478158474],
                zoom: 10.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Las Palmas de Gran Canaria',
            subtitle: 'Canarias',
            image: './assets/LASPALMAS.jpg',
            description: '<b>Fechas: Febrero, extendiéndose durante varias semanas.</b><br>'+
            'Para finalizar, con su clima perfecto, cerramos con este carnaval que se vive en un ambiente tropical y actividades únicas.<br>'+
            '<b>Actividades destacadas:</b>'+
            '<ul><li>Gala Drag Queen, una de las más famosas del país</li>'+
            '<li>Cabalgata principal</li>'+
            '<li>Entierro de la Sardina</li></ul>',
            location: {
                center: [-15.437266282711388, 28.130933460724187],
                zoom: 10.5,
                pitch: 60,
                bearing: 43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Un país, muchas celebraciones',
            image: '',
            description: 'España aloja muchos de las celebraciones de Carnaval más divertidas y reconocidas en el mundo en varios puntos de la península, así como las islas Canarias.<br>'+
            'La variedad de actividades y programas que son ofrecidas por cada una es  gran oportunidad para conocer diversos lugares, explorar gastronomia y divertirse en una fiesta de música y color.',
            location: {
                center: [-3.14250, 40.49458],
                zoom: 4.10,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
