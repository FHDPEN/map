/*
 Template Name: Amezia - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Vector Maps Init
 */



!function () {
    "use strict";

    var VectorMap = function () {
    };

    VectorMap.prototype.init = function () {
        //various examples
        $('#world-map-markers').vectorMap({
            map: 'world_mill_en',
            scaleColors: ['#eb7475', '#eb7475'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle: {
                initial: {
                    fill: '#44a2d2'
                }
            },
            markerStyle: {
                initial: {
                    r: 9,
                    'fill': '#000000',
                    'fill-opacity': 0.9,
                    'stroke': '#f2f5f7',
                    'stroke-width': 7,
                    'stroke-opacity': 0.4
                },

                hover: {
                    'stroke': '#fff',
                    'fill-opacity': 1,
                    'stroke-width': 1.5
                }
            },
            backgroundColor: 'transparent',
            markers: [
                <?php echo "{latLng: [41.90,12.45],name: 'Vatican City'}" ?>
                //{latLng: [41.90,12.45],name: 'Vatican City'}
                
            ]
            
			
			
        });
        
    },
        //init
        $.VectorMap = new VectorMap, $.VectorMap.Constructor = VectorMap
}(window.jQuery),

//initializing 
    function ($) {
        "use strict";
        $.VectorMap.init()
    }
(window.jQuery);
