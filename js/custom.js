var container= document.querySelector('.glarry');

		var mixer = mixitup(container,{
			selectors:{
				control: '[our-btn-control]'
			}
        });
        

        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                autoplay:true,
                autoplayTimeout:1000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }

            });
          });



    $(".TopUP").click(function(){
            $('html, body').animate(function(){
                scrollTop : 200
            }, 5000);

    });





          