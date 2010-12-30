$(function() {

    $("a[rel=group]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
                return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    $("#cloud-right").circulate({
        speed: 3600,                  // Speed of each quarter segment of animation, 1000 = 1 second
        height: 20,                 // Distance vertically to travel
        width: -20,                  // Distance horizontally to travel
        sizeAdjustment: 100,         // Percentage to grow or shrink
        loop: true,
        zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation
    });

    $("#cloud-left").circulate({
        speed: 2400,                  // Speed of each quarter segment of animation, 1000 = 1 second
        height: 50,                 // Distance vertically to travel
        width: -50,                  // Distance horizontally to travel
        sizeAdjustment: 80,         // Percentage to grow or shrink
        loop: true,
        zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation
    });
});
