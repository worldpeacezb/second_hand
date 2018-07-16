
function search()
{
    var surprise = document.getElementById('banner');
    var clear = document.createElement("div");
    clear.innerHTML += "<div class=\"clearfix\"> </div>";

    for(var total = 0; total < shop_data.info.length ; total++)
    {
        if(shop_data.info[total].shopname.indexOf(search_text) != -1)
        {
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
                shop_data.info[total].shopimg +
                "' class=\"img-responsive\"" +
                "alt=\" \" /></a>\n" +
                "<p>" +
                shop_data.info[total].shopname +
                "</p>\n" +
                "<h4>￥" +
                shop_data.info[total].shopcost +
                "</h4>\n" +
                "</div>\n" +
                "<div class=\"snipcart-details\">\n" +
                "<a href='" +
                url[1] +
                "' <button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" >购买</button></a>\n" +
                "<button class=\"btn btn1-danger my-cart-btn1 hvr-sweep-to-right\" onclick=\"collect()\t\" >收藏</button>\n" +
                "<button class=\"btn btn-danger my-cart-btn2 \" style=\"margin-left: 10%\"  onclick=\"no_collect()\">取消收藏</button>\n" +
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
    }
}