/**
 * Created by shya on 2016/10/6.
 */

$(window).scroll(function(){
        var sum = document.body.scrollHeight;
        if ((sum-700)<= ($(this).scrollTop() + $(this).height())) {
            setTimeout('story()',4000);
            setTimeout('storyList()',4000);
        }
    });

function story(){
    var st="<div class='story'><a><img src='images/img_26.png' width='100%'></a><div class='story-bottom'><p>小老鼠忙碌的一天</p></div></div>";
    $('.story:last').after(st);
}

function storyList(){
    var stl="<div class='story-list'><div class='story-list-img'><a href='product-single.html'><img src='images/img_27.png'/></a></div><div class='story-list-detail'><p class='story-list-title-p1'><a class='story-list-detail-a1' href='product-single.html'>小老鼠忙碌的一天</a></p><p class='story-list-title-p2'><a class='story-list-detail-a2' href='product-single.html'>兔子姐姐讲故事第13期</a></p><a class='story-list-detail-a3' href='product-single.html'><img src='images/img_31.png' width='100%'/></a></div></div>";
    $('.story-list:last').after(stl);
}
