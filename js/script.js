
$(document).ready(function() {

});

$(document).ready(function() {
  $('#slides').superslides({animation: 'fade', play: 4000, pagination: false});
});

$(document).ready(function() {
  const typed = new Typed(".typed", {
    strings: [
      "MODEL", "CHI | ATL | NY | LA | MA"
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });
});

$(document).ready(function() {
    $("#mobileMenuLink").on("click", function() {
        $("#mobileNav").slideToggle();
    });
    $("#mobileNav nav ul li").on("click", function() {
        if ($(this).find(".subnav").length > 0) {
            if ($(this).find(".subnav").css("display") == "none") {
                $("#mobileNav nav ul li .subnav").css("display", "none")
                $(this).find(".subnav").slideDown(1000);
            } else {
                //$(this).find(".subnav").slideToggle();
            }
        }
    });
});
