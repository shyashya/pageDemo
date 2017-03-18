/**
 * Created by admin on 2016/9/26.
 */
$(document).ready(function(){

        $("#case-jingzhuang").click(function(){

            $(".case-jingzhuang").fadeIn(2000);
            $("#case-jingzhuang").addClass("zhuang");
            $("#case-gongcheng").removeClass("zhuang");
            $("#case-jiazhuang").removeClass("zhuang");
            $(".case-gongcheng").fadeOut();
            $(".case-jiazhuang").fadeOut();
        });

    $("#case-jiazhuang").click(function(){
        $(".case-jiazhuang").fadeIn(2000);
        $("#case-jiazhuang").addClass("zhuang");
        $("#case-gongcheng").removeClass("zhuang");
        $("#case-jingzhuang").removeClass("zhuang");
        $(".case-gongcheng").fadeOut();
        $(".case-jingzhuang").fadeOut();
    });

    $("#case-gongcheng").click(function(){
        $(".case-gongcheng").fadeIn(2000);
        $("#case-gongcheng").addClass("zhuang");
        $("#case-jiazhuang").removeClass("zhuang");
        $("#case-jingzhuang").removeClass("zhuang");
        $(".case-jiazhuang").fadeOut();
        $(".case-jingzhuang").fadeOut();
    });
    }
)
