
var app = angular.module('griha', ['ui.bootstrap.carousel', 'ui.bootstrap.tabs', 'ngRoute']);
//var app = angular.module('griha', ['ui.bootstrap', 'ngRoute']);
//var app = angular.module('griha', ['ui.bootstrap.carousel', 'ui.bootstrap.tabs']);

app.factory('Project', function ($q, $http) {
    return {
        newListings: function () {
            var deferred = $q.defer();
            $http.get('Model/Projects.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject();
            });

            return deferred.promise;
        },

        getDetails: function (id) {
            return $http.get('Model/' + id + '.json');
        },
        
        sendMail : function(contact){
        	return $http.post('griha', contact);
        }

    }
});
  

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', { templateUrl: 'Partials/Home.html', controller:projectCtrl}).
    when('/blog', { templateUrl: 'Partials/Blog.html' }).
    when('/projectDetail/:Id', { templateUrl: 'Partials/ProjectDetail.html', controller:projectDetailCtrl}).
    when('/carousel', { templateUrl: 'Partials/carousel.html', controller: projectCtrl }).
    when('/nivo', { templateUrl: 'Partials/NivoSlider.html' }).
    when('/bslider', { templateUrl: 'Partials/bslider.html' }).
    otherwise({ redirectTo: '/home' });

    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

}]);



app.directive('googlemap', function ($timeout) {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            //$(element).toolbar(scope.$eval(attrs.toolbarTip));
            $timeout(function () {
                var v = new Maplace({
                    show_markers: true,
                    map_div: '#' + attrs.id,
                    locations: [{
                        lat: 10.120302,
                        lon: 76.386539,
                        zoom: 13
                    }]
                });

                v.Load();
            }, 0);
        }
    }
});

//app.directive('nivoslider', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            var id = '#' + attrs.id;
//            jQuery(element).nivoSlider({
//                effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
//                slices: 15, // For slice animations
//                boxCols: 8, // For box animations
//                boxRows: 4, // For box animations
//                animSpeed: '500', // Slide transition speed
//                pauseTime: '3000', // How long each slide will show
//                startSlide: 0, // Set starting Slide (0 index)
//                directionNav: true, // Next & Prev navigation
//                directionNavHide: false, // Only show on hover
//                controlNav: true, // 1,2,3... navigation
//                controlNavThumbs: false, // Use thumbnails for Control Nav
//                controlNavThumbsFromRel: false, // Use image rel for thumbs
//                controlNavThumbsSearch: '.jpg', // Replace this with...
//                controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
//                keyboardNav: true, // Use left & right arrows
//                pauseOnHover: true, // Stop animation while hovering
//                manualAdvance: false, // Force manual transitions
//                captionOpacity: 0.8, // Universal caption opacity
//                prevText: 'Prev', // Prev directionNav text
//                nextText: 'Next', // Next directionNav text
//                randomStart: false, // Start on a random slide
//                beforeChange: function () { }, // Triggers before a slide transition
//                afterChange: function () { }, // Triggers after a slide transition
//                slideshowEnd: function () { }, // Triggers after all slides have been shown
//                lastSlide: function () { }, // Triggers when last slide is shown
//                afterLoad: function () { } // Triggers when slider has loaded
//            });
//        }
//    }
//});

app.directive('amazingslider', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var jsFolder = "http://amazingslider.com/wp-content/uploads/amazingslider/19/sliderengine/";
            var id = '#' + attrs.id;
            jQuery(id).amazingslider({
                jsfolder: jsFolder,
                width: 1100,
                height: 500,
                watermarkstyle: "text",
                loadimageondemand: false,
                watermarktext: "http://amazingslider.com",
                isresponsive: true,
                autoplayvideo: false,
                watermarkimage: "",
                pauseonmouseover: false,
                watermarktextcss: "font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
                randomplay: false,
                showwatermark: false,
                watermarklinkcss: "text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
                slideinterval: 5000,
                watermarktarget: "_blank",
                watermarkpositioncss: "display:block;position:absolute;top:4px;left:4px;",
                watermarklink: "http://amazingslider.com",
                transitiononfirstslide: false,
                loop: 0,
                autoplay: true,
                navplayvideoimage: "play-32-32-0.png",
                navpreviewheight: 60,
                timerheight: 2,
                skin: "Navigator",
                textautohide: false,
                addgooglefonts: true,
                navshowplaypause: true,
                navshowplayvideo: false,
                navbuttonradius: 0,
                navpreviewposition: "top",
                navradius: 0,
                showshadow: false,
                navfeaturedarrowimagewidth: 16,
                navpreviewwidth: 120,
                googlefonts: "Inder",
                textpositionmarginright: 24,
                bordercolor: "#ffffff",
                navthumbnavigationarrowimagewidth: 32,
                navthumbtitlehovercss: "text-decoration:underline;",
                arrowwidth: 32,
                navmargin: 16,
                texteffecteasing: "easeOutCubic",
                texteffect: "slide",
                navspacing: 8,
                navarrowimage: "navarrows-28-28-0.png",
                ribbonimage: "ribbon_topleft-0.png",
                navwidth: 24,
                navheight: 24,
                timeropacity: 0.6,
                navthumbnavigationarrowimage: "carouselarrows-32-32-0.png",
                navpreviewbordercolor: "#ffffff",
                ribbonposition: "topleft",
                navthumbdescriptioncss: "display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
                arrowstyle: "always",
                navthumbtitleheight: 20,
                textpositionmargintop: 24,
                navswitchonmouseover: false,
                playvideoimage: "playvideo-64-64-0.png",
                arrowimage: "arrows-32-32-2.png",
                textstyle: "dynamic",
                playvideoimageheight: 64,
                navfonthighlightcolor: "#666666",
                showbackgroundimage: false,
                navpreviewborder: 4,
                navdirection: "horizontal",
                navbuttonshowbgimage: true,
                navbuttonbgimage: "navbuttonbgimage-28-28-0.png",
                navthumbnavigationarrowimageheight: 32,
                textbgcss: "display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#fff; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; opacity:0.7; filter:alpha(opacity=70);",
                shadowcolor: "#aaaaaa",
                navborder: 4,
                bottomshadowimagewidth: 110,
                showtimer: true,
                navshowpreview: true,
                navpreviewarrowheight: 8,
                navfeaturedarrowimage: "featuredarrow-16-8-0.png",
                showribbon: false,
                navfeaturedarrowimageheight: 8,
                navstyle: "bullets",
                textpositionmarginleft: 24,
                descriptioncss: "display:block; position:relative; font:14px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#333;",
                navplaypauseimage: "navplaypause-28-28-0.png",
                backgroundimagetop: -10,
                timercolor: "#ffffff",
                navfontsize: 12,
                navhighlightcolor: "#333333",
                navimage: "bullet-24-24-5.png",
                navbuttoncolor: "#999999",
                navshowarrow: true,
                navshowfeaturedarrow: false,
                titlecss: "display:block; position:relative; font: 16px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#000;",
                ribbonimagey: 0,
                ribbonimagex: 0,
                shadowsize: 5,
                arrowhideonmouseleave: 1000,
                navopacity: 0.8,
                backgroundimagewidth: 120,
                navcolor: "#999999",
                navthumbtitlewidth: 120,
                playvideoimagewidth: 64,
                arrowheight: 32,
                arrowmargin: -48,
                texteffectduration: 1000,
                bottomshadowimage: "bottomshadow-110-95-2.png",
                border: 6,
                timerposition: "bottom",
                navfontcolor: "#333333",
                navthumbnavigationstyle: "arrow",
                borderradius: 0,
                navbuttonhighlightcolor: "#333333",
                textpositionstatic: "bottom",
                navthumbstyle: "imageonly",
                textcss: "display:block; padding:8px 16px; text-align:left; ",
                navbordercolor: "#ffffff",
                navpreviewarrowimage: "previewarrow-16-8-0.png",
                showbottomshadow: true,
                backgroundimage: "",
                navposition: "bottom",
                navpreviewarrowwidth: 16,
                bottomshadowimagetop: 95,
                textpositiondynamic: "bottomleft",
                navshowbuttons: false,
                navthumbtitlecss: "display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
                textpositionmarginbottom: 24,
                slide: {
                    duration: 1000,
                    easing: "easeOutCubic",
                    checked: true
                },
                transition: "slide"
            });
        }
    }
});

