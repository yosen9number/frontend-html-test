(function($, undefined) {
    var ask = $('.ask-items'),
        askItem =  $('.ask-item');

    askItem.click(function(e) {
        e.preventDefault();
        $(this).closest(ask).find(askItem).removeClass('active');
        $(this).addClass('active');
    });
})(jQuery);