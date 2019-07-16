/**
* @requires jQuery/Snap.js
* @date     06/02/2019
* @author   iSuriv
*
*
* - Select Part
*/

var svgElement = Snap("#svgout");
var car = Snap.load("assets/car/hondaAccord.svg", function (loadedFragment) {
        'use strict';
        svgElement.append(loadedFragment);
    });


(function ($) {
    'use strict';
    $(function () {
        $('.legend ul li').click(function () {
            var $valImg = $(this).attr('id').substring(1, 5);
            $('[id^=c' + $valImg + '-]').each(function () {
                $(this).fadeOut(500);
            });
        });
    });
}(jQuery));
