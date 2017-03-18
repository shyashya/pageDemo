/**
 * Created by admin on 2016/9/21.
 *
 * 用来处理下拉菜单和头部的切换
 */
$(document).ready(function(){
    list1show();
    list2show()
}
)

$(window).scroll(function(){
    var l=$(document).scrollTop();
    if(l>303){
        $("#header2").show();
        $("#header1").hide();
    }else{
        $("#header2").hide();
        $("#header1").show();
    }
})

function list1show()
{
    $(".main>:first").hover(function(){
        $(".drop").show();
    },function(){
        $(".drop").hide();
    });
}

function list2show()
{
    $("#header2 .main>:first").hover(function(){
        $(".drop").show();
    },function(){
        $(".drop").hide();
    });
}

