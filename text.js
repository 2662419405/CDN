var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("❤欢迎来到残梦博客园❤","❤live a good live,write some good code!❤","❤我进步的很慢,但我从不后退❤","❤欲望以提升热忱，毅力以磨平高山。❤","❤花开不是为了花落，而是为了开的更加灿烂。❤","❤没有伞的孩子必须努力奔跑！❤");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 1e+69,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," +
        ~~(255 * Math.random()) + ")",
            "font-size":"12px"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			2000,
			function() {
			    $i.remove();
			});
    });
});