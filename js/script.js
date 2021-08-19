// Navbar Fixed

$(window).on("scroll", function() {

        if ($(".navbar").offset().top > 40) {
            $(".navbar").addClass("navbar-fixed");

        } else {
            $(".navbar").removeClass("navbar-fixed");

        }
    })
    // PopUp Imagen magnificada
$('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    galery: {
        enabled: true,
        navigateByImgClick: true
    }
})

// Scroll Up botón 
$(window).on("scroll", function() {
    if ($(".navbar").offset().top > 40) {
        $(".go-top").show();
    } else {
        $(".go-top").hide();
    }
})

// send Email
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "whisgeljesus10@gmail.com",
        Password: "akemy0519",
        To: 'whisgeljesus10@gmail.com',
        From: "whisgeljesus@gmail.com",
        Subject: "Revision de Portafolio/Solicitud de contacto",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}