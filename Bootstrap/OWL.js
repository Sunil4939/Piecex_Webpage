
// ----------------------featured carousel-----------------
$(document).ready(function () {
    $('.featured_carousel').owlCarousel({
        // loop: false,
        margin: 5,
        nav: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            350:{
                items:1.3,
                nav:true
            },
            600:{
                items:2.5,
                nav:true
            },
            1000:{
                items:4.5,
                nav:true,
                loop:true
            }
        }
    })
})
// -----------------popular carousel-------------------------
$(document).ready(function () {
    $('.popular_carousel').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            395:{
                items:1.5,
                nav:true
            },
            430:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false
            },
            1200:{
                items:6,
                nav:true,
                loop:false
            }
        }
    })
})

  