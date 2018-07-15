
var i = 0;
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