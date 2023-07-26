$(function () {
    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02', 'sub03'],
        // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        navigation: false,
        css3: false,
        responsiveWidth: 700,
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on')
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');

            // 스크롤 on
            if (idx == 1) {
                $('.Header').addClass('on')
                $('.fix_ft_wrap').addClass('on')
                $('.Header .logo').addClass('on')
                $('.contact a').addClass('on')
                $('.gnb').addClass('on')

            } else {
                $('.Header').removeClass('on')
                $('.fix_ft_wrap').removeClass('on')
                $('.Header .logo').removeClass('on')
                $('.contact a').removeClass('on')
                $('.gnb').removeClass('on')
            }
        },
    });


})


const MAIN_SLIDE = new Swiper('.main_slide', {
    loop: true,
    slideActiveClass: 'on',
    effect: 'fade',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

});