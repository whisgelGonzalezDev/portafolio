$(window).on("scroll", function() {

    if ($(".navbar").offset().top > 40) {
        $(".navbar").addClass("navbar-fixed");

    } else {
        $(".navbar").removeClass("navbar-fixed");

    }
})



$('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    galery: {
        enabled: true,
        navigateByImgClick: true
    }
})

$(window).on("scroll", function() {
    if ($(".navbar").offset().top > 40) {
        $(".go-top").show();
    } else {
        $(".go-top").hide();
    }
})