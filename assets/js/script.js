function load(){
    let loader = document.querySelector('#loader');
    loader.parentNode.removeChild(loader);
}

$(document).ready(function () {

    new WOW().init();

    var $header_top = $('.header-top');

    // toggle menu  web
    $header_top.find('a.toggle-menu').on('click', function() {
        $(this).parent().toggleClass('open-menu ');

    });
    new Swiper('.aboutus  .testimonials_section .swiper-container', {
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        lazy: true,
        pagination: {
            el: '.testimonials_section .swiper-pagination',
            clickable: true,
        },


    });






    $(document).ready(function() {
        $('.login form div input').focus(function (){
            $('.login form div label[for="'+this.type+'"]').addClass('focused');
        });

        $('.login form div input').blur(function (){
            if (this.value == ''){
                $('.login form div label[for="'+this.type+'"]').removeClass('focused');

                $(this).removeAttr('style');
            }else{
                $(this).css('box-shadow','0 0 0 0').css('border-bottom','2px solid #1C0551')
                        .css('color','#1C0551').css('font-size','25px').css('font-weight','600');
            }
        });
    });


new Swiper('.aboutus  .photo .swiper-container', {
        slidesPerView: 'auto',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },

    });


    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
});

$(document).on( "click" , function (event) {
        var clickover = $(event.target);
        var _opened = $(".menu-container").hasClass("open-menu");
        if (_opened === true && !clickover.hasClass("toggle-menu")) {
            $(".toggle-menu").click();
        }
    });

// fullpage customization
$('#fullpage').fullpage({
    autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor: '#F9F9F9',
    background:'#ED1E53',
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection'],
    menu: '#menu',


});

if($("html").find(".aboutus").length > 0){
    var words = $(".typed").data("words").split("|");
    var typed = $(".typed");

    $(function() {
        typed.typed({
            strings: words,
            typeSpeed: 100,
            loop: false,
        });
    });


}