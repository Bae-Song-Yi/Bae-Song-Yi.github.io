$(document).ready(function(){
    $('.layerPopWrap .btns a.cancel, .layerPopWrap .btns a.close').click(function(){
        $(this).parents('.layerPopWrap').hide();
        return false;
    })
    $('.login .noti .tab a').click(function(){
        var index = $(this).index();
        console.log(index)
        $('.login .noti .tab a').removeClass('on');
        $('.login .noti li').hide();
        $(this).addClass('on');
        $('.login .noti li').eq(index).show();
        return false;
    })
    //주간메뉴표Pop
    $('.menuConfirmWrap.layerPopWrap').click(function(){
        $('.menuConfirmPop').hide();
        $(this).hide();
    })
    //결과
    setTimeout(function(){
        $('.result .checkComplete').css({'transform' : 'translateY(0)', 'opacity' : '1'});
    }, 300)
})