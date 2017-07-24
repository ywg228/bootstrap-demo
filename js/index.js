$(function () {
    /*模态框Modal*/
    $('#login-modal').modal({
        show: false,  //当初始化时显示模态框。
        backdrop: true, //当用户点击模态框外部时是否会关闭模态框。
        keyboard: true //当按下Esc键时是否关闭模态框
    });

    /*下拉菜单DropDown*/
    /*$('.dropdown-toggle').dropdown('toggle');*/

    /*轮播图Carousel*/
    $('#slideshow').carousel({
        interval: 4000,
        pause: 'hover',
        wrap: true,
        keyboard: true
    });

    $('.prev-slide').click(function () {
        $('#slideshow').carousel('prev');
    });

    $('.next-slide').click(function () {
        $('#slideshow').carousel('next');
    });

    $(document).on('keydown', function (e) {
        switch (e.which) {
            case 37:
                $('#slideshow').carousel('prev');
                break;
            case 39:
                $('#slideshow').carousel('next');
                break;
            default:
                break;
        }
    })

    var isPlay = true;
    $('.play-stop').click(function () {
        if (isPlay) {
            $('#slideshow').carousel('pause');
            $(this).children('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
        } else {
            $('#slideshow').carousel('cycle');
            $(this).children('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
        }
        isPlay = !isPlay;
    });

    $('.first-slide').click(function () {
        $('#slideshow').carousel(0);
    });

    $(window).load(function() {
        $('#project-container').css({visibility: 'visible'});

        $('#project-container').masonry({
            itemSelector: '.project-item:not(.filtered)',
            isFitWidth: true,
            isResizable: true,
            isAnimated: true,
            gutterWidth: 0
        });

        scrollSpyRefresh();
    });

    /*滚动监听Scrollspy*/
  /*  $('body').scrollspy({
        target: '#mScrollspy',
        offset: '0'
    });*/


    function scrollSpyRefresh(){
        setTimeout(function(){
            $('body').scrollspy('refresh');
        },1000);
    }

    $('#mScrollspy li').click(function (e) {
        e.preventDefault();
        var _self = this;
        var target = $(_self).find('a').prop('hash');
        $('html, body').animate({
            scrollTop: $(target).offset().top-70
        }, 300);
        $(_self).addClass('active').siblings().removeClass('active');
    });

    /*标签页Tab*/
    $('#mTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /*折叠Collapse*/
    $('#collapse-1').collapse('show');
    $('#collapse-2').collapse('hide');
    $('#collapse-3').collapse('toggle');
    $('#collapse-4').collapse({
        toggle: false
    });

    /*提示工具Tooltip*/
    $('[data-toggle="tooltip"]').tooltip();

    /*弹出框Popover*/
    $('[data-toggle="popover"]').popover();

    /*警告框Alert*/
    $('#alert-1 .close').click(function () {
        $('#alert-1').alert('close');
    });
});

