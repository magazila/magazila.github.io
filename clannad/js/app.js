$(function () {
    let currentOffset = 0;
    const step = 920;
    const maxOffset = -8280;

    function updateButtons() {
        if (currentOffset === 0) {$('.chara__container-left').hide();} 
        else {$('.chara__container-left').show();}
        if (currentOffset <= maxOffset) {$('.chara__container-rigth').hide();} 
        else {$('.chara__container-rigth').show();}
    }
    $('.open__menu').on('click', function () {
        $('.header').toggleClass('openned__menu');
    });

    $('.header__link').on('click', function () {
        $('.header').toggleClass('openned__menu');
    });
    $('.open__menu').html('<i class="fa-solid fa-ellipsis-vertical"></i>');

    updateButtons();

    $('.chara__container-rigth').on('click', function () {
        if (currentOffset > maxOffset) {
            currentOffset -= step;
            $('.chara__container').css({
                'transform': `translateX(${currentOffset}px)`
            });
            updateButtons();
        }
    });

    $('.chara__container-left').on('click', function () {
        if (currentOffset < 0) {
            currentOffset += step;
            $('.chara__container').css({
                'transform': `translateX(${currentOffset}px)`
            });
            updateButtons();
        }
    });
});