let items = document.querySelectorAll('.product-item');
let itemsImg = document.querySelectorAll('.product-item img');
let nextBtn = document.querySelector('#next');
let preBtn = document.querySelector('#pre');
let lightBoxImg = document.querySelector('.lightbox-img img');
let ind = 0;
// preloader
$(document).ready(function() {
    $('.loader').fadeOut(1000, () => {
        $('body').css({
            overflow: 'auto'
        })
    });





});






//nav bar after moving

$(window).scroll(() => {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > $('.about').offset().top) {
        $('.fixed-navbar').addClass('navdown');
        $('.nav-links').addClass('text-white');
        $('.logo img').attr("src", "imgs/b-offwite-01.png");

    } else {
        $('.fixed-navbar').removeClass('navdown');
        $('.nav-links').removeClass('text-white');
        $('.logo img').attr("src", "imgs/b-01.png");

    }
});
$('.logo img').attr("src", "imgs/b-offwite-01.png");


$('.nav-links').click(function() {

    let href = $(this).attr('href');


    let secTop = $(href).offset().top;


    $('body, html').animate({
        scrollTop: secTop
    }, 2000)

});

// up button
$(window).scroll(() => {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 120) {

        $('.up').slideDown(300);
    } else {

        $('.up').slideUp(300);
    }
})

$('.up').click(function() {

    $('body, html').animate({
        scrollTop: 0
    }, 1000)
})


//lightbox
$('.product-item').click(function() {
    $('.lightbox').css({
            opacity: '1',
            display: 'block'

        })
        //console.log($(this).attr('src'))
        // console.log(this)
        //$()
})
$('.lightbox-bg').click(function() {
    $('.lightbox').css({
        opacity: '0',
        display: 'none'
    });
});
$('#close').click(function() {
    $('.lightbox').css({
        opacity: '0',
        display: 'none'
    });
});


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        lightBoxImg.src = itemsImg[i].src;
        ind = i;
    })


}
preBtn.addEventListener('click', () => {
    ind--;

    if (ind >= 0) {
        lightBoxImg.src = itemsImg[ind].src;
    } else {
        ind = itemsImg.length - 1;
        lightBoxImg.src = itemsImg[ind].src;
    }

});
nextBtn.addEventListener('click', () => {
    ind++;

    if (ind < itemsImg.length) {
        lightBoxImg.src = itemsImg[ind].src;
    } else {
        ind = 0;
        lightBoxImg.src = itemsImg[ind].src;
    }

});

document.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowRight') {
        ind++;

        if (ind < itemsImg.length) {
            lightBoxImg.src = itemsImg[ind].src;
        } else {
            ind = 0;
            lightBoxImg.src = itemsImg[ind].src;
        }
    } else if (e.code == 'ArrowLeft') {
        ind--;

        if (ind >= 0) {
            lightBoxImg.src = itemsImg[ind].src;
        } else {
            ind = itemsImg.length - 1;
            lightBoxImg.src = itemsImg[ind].src;
        }
    }
})


$(document).keydown(function(e) {

    if (e.code == 'Escape') {
        $('.lightbox').css({
            opacity: '0',
            display: 'none'
        });
    }
    if (e.code == 'Space') {
        let num = $(window).scrollTop() + 300;
        $('body, html').animate({
            scrollTop: num
        }, 500)
    }

});



let h = [];
for (let i = 0; i < $('section').length; i++) {

    h[i] = {
        name: $('section').eq(i).attr('id'),
        top: $('section').eq(i).offset().top,
        bottom: $('section').eq(i).offset().top + $('section').eq(i).outerHeight()
    };
}
$(window).scroll(function() {
    let cur_pos = $(window).scrollTop();

    $('section').each(function() {

        let top = $(this).offset().top - 20;
        let bottom = top + $(this).outerHeight() + 100;

        if (cur_pos >= top && cur_pos <= bottom) {
            $('.nav-item').find('.nav-links').removeClass('active-navbar');

            $('.nav-item').find(`a[href="#${$(this).attr('id')}"]`).addClass('active-navbar');

        }
        if (cur_pos < 280) {
            $('.nav-item').find('.nav-links').removeClass('active-navbar');
            $(".nav-links").eq(0).addClass('active-navbar');
        }
    })


});