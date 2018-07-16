
var i = 0;
var j = 0;
//创建新的商品栏
function creatdiv_total() {
    var surprise = document.getElementById('banner');
    var clear = document.createElement("div");
    clear.innerHTML += "<div class=\"clearfix\"> </div>";

    surprise.innerHTML += "<div class=\"w3ls_w3l_banner_nav_right_grid1\">\n" +
        "<div class=\"col-md-3 w3ls_w3l_banner_left\">\n" +
        "<div class=\"hover14 column\">\n" +
        "<div class=\"agile_top_brand_left_grid w3l_agile_top_brand_left_grid\">\n" +
        "<div class=\"agile_top_brand_left_grid1\">\n" +
        "\<figure>\n" +
        "<div class=\"snipcart-item block\">\n" +
        "<div class=\"snipcart-thumb\">\n" +
        "<a href=\"single.html\"><img src=\"src/images/4.jpg\" alt=\" \" class=\"img-responsive\" /></a>\n" +
        "<p>dishwash gel, lemon  (1.5 ltr)</p>\n" +
        "<h4>$8.00</h4>\n" +
        "</div>\n" +
        "<div class=\"snipcart-details\">\n" +
        "<button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" id=\"17\" data-name=\"Dishwash gel, lemon\" data-summary=\"summary 17\" data-price=\"8.00\" data-quantity=\"1\" data-image=\"images/17.png\">购买</button>\n" +
        "<button class=\"btn btn1-danger my-cart-btn1 hvr-sweep-to-right\" id=\"collect\" onclick=\"collect()\t\" >收藏</button>\n" +
        "<button class=\"btn btn-danger my-cart-btn2 \" style=\"margin-left: 10%\" id=\"no_collect\" onclick=\"no_collect()\">取消收藏</button>\n" +
        "</div>\n" +
        "</div>\n" +
        "</figure>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>";
    i++;
    while(i % 4 == 0)
    {
        surprise.appendChild(clear);
        break;
    }
}



function creatdiv_goods(){
    var surprise = document.getElementById('goods_container');
    var clear = document.createElement("div");
    clear.innerHTML += "<div class=\"clearfix\"> </div>";

    surprise.innerHTML += "<div class=\"w3ls_w3l_banner_nav_right_grid1\">\n" +
        "<div class=\"col-md-3 w3ls_w3l_banner_left\">\n" +
        "<div class=\"hover14 column\">\n" +
        "<div class=\"agile_top_brand_left_grid w3l_agile_top_brand_left_grid\">\n" +
        "<div class=\"agile_top_brand_left_grid1\">\n" +
        "\<figure>\n" +
        "<div class=\"snipcart-item block\">\n" +
        "<div class=\"snipcart-thumb\">\n" +
        "<a href=\"single.html\"><img src=\"src/images/4.jpg\" alt=\" \" class=\"img-responsive\" /></a>\n" +
        "<p>dishwash gel, lemon  (1.5 ltr)</p>\n" +
        "<h4>$8.00</h4>\n" +
        "</div>\n" +
        "<div class=\"snipcart-details\"> <a href=\"mirror.html\"><button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" data-id=\"28\" data-name=\"Chicken in jelly can\" data-summary=\"summary 28\"data-price=\"7.00\" data-quantity=\"1\"data-image=\"src/images/18.png\"style=\"margin-left: 30%\" >商品详情</button></a> </div>" +
        "</div>\n" +
        "</figure>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div></div>";
    j++;
    while(j % 4 == 0)
    {
        surprise.appendChild(clear);
        break;
    }
}

var name = new Array("A","B","C")
var cost = new Array("1","2","3")
var img = new Array("src/images/4.jpg","src/images/5.jpg","src/images/6.jpg")
var url = new Array("single.html","single.html","single.html")


function creatdiv_search() {
    var surprise = document.getElementById('banner');
    var clear = document.createElement("div");
    clear.innerHTML += "<div class=\"clearfix\"> </div>";

    surprise.innerHTML += "<div class=\"w3ls_w3l_banner_nav_right_grid1\">\n" +
        "<div class=\"col-md-3 w3ls_w3l_banner_left\">\n" +
        "<div class=\"hover14 column\">\n" +
        "<div class=\"agile_top_brand_left_grid w3l_agile_top_brand_left_grid\">\n" +
        "<div class=\"agile_top_brand_left_grid1\">\n" +
        "\<figure>\n" +
        "<div class=\"snipcart-item block\">\n" +
        "<div class=\"snipcart-thumb\">\n" +
        "<a href=" +
        url[1] +
        "><img src = '" +
        img[1] +
        "' class=\"img-responsive\"" +
        "alt=\" \" /></a>\n" +
        "<p>" +
        name[2] +
        "</p>\n" +
        "<h4>￥" +
        cost[1] +
        "</h4>\n" +
        "</div>\n" +
        "<div class=\"snipcart-details\">\n" +
        "<button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\"  data-image= img1.src>购买</button>\n" +
        "<button class=\"btn btn1-danger my-cart-btn1 hvr-sweep-to-right\" id=\"collect\" onclick=\"collect()\t\" >收藏</button>\n" +
        "<button class=\"btn btn-danger my-cart-btn2 \" style=\"margin-left: 10%\" id=\"no_collect\" onclick=\"no_collect()\">取消收藏</button>\n" +
        "</div>\n" +
        "</div>\n" +
        "</figure>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>";
    i++;
    while(i % 4 == 0)
    {
        surprise.appendChild(clear);
        break;
    }
}