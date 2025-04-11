$(document).ready(function () {

    $('#cities__items').owlCarousel({
        loop:true,
        margin: 20,
        dots:false,
        items:5,
        navText:[
            `<svg width="16" height="39" viewBox="0 0 16 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6665 37L1.99984 19.5L13.6665 2" stroke="#E2E2E2" stroke-width="3" stroke-linecap="round"/>
            </svg>`,
            `<svg width="16" height="39" viewBox="0 0 16 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L13.6667 19.5L2 37" stroke="#E2E2E2" stroke-width="3" stroke-linecap="round"/>
            </svg>
            `
        ],
        nav:true,
    })

    $('#cities__items-mobile').owlCarousel({
        loop:true,
        margin: 20,
        dots:false,
        items: 1,
        navText:[
            `<svg width="11" height="25" viewBox="0 0 11 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 23L2 12.5L9 2" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>`,
            `<svg width="11" height="25" viewBox="0 0 11 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L9 12.5L2 23" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>                    `
        ],
    })
    

    $('#cities__items .owl-nav,#cities__items-mobile .owl-nav').removeClass('disabled');

    $('#cities__items,#cities__items-mobile').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

});
