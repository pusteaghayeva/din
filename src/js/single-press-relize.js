$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1220, 3],
        itemsMiddle: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true

    });
});