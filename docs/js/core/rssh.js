var svgElement=Snap("#svgout"),car=Snap.load("assets/car/hondaAccord.svg",function(t){"use strict";svgElement.append(t)});!function(n){"use strict";n(function(){n(".legend ul li").click(function(){var t=n(this).attr("id").substring(1,5);n("[id^=c"+t+"-]").each(function(){n(this).fadeOut(500)})})})}(jQuery);