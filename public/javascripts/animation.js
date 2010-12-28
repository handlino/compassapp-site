$(window).load(function() {
	
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