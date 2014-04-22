(function($) {
    var $window = $(window);

    $('#footer-slide .content').height($window.height());

    var s = skrollr.init({
        render: function(data) {
            // console.log(data.curTop);
        }
    });
})(jQuery);