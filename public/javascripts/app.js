$(function() {

    $("a[rel=group]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
                return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    $("#cloud-right").css("left", $("#cloud-right").position().left).circulate({
        sizeAdjustment: 100,
        speed: 3600,
        width: -20,
        height: 20,
        loop: true,
        zIndexValues: [1, 0, 50, 1]
    });
    $("#cloud-left").css("left", $("#cloud-left").position().left).circulate({
        sizeAdjustment: 80,
        speed: 2400,
        width: -50,
        height: 50,
        loop: true,
        zIndexValues: [1, 0, 50, 1]
    });
});
