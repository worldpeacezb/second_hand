
var i = 0;
var j = 0;
var k = 0;
//创建新的商品栏
function creatdiv_goods(){
    var surprise = document.getElementById('goods_container');
    var clear = document.createElement("div");
    clear.innerHTML += "<div class=\"clearfix\"> </div>";

    surprise.innerHTML += "<div class=\"w3ls_w3l_banner_nav_right_grid1\">\n" +
        "<div class=\"col-md-3 w3ls_w3l_banner_left\">\n" +
        "<div class=\"hover14 column\">\n" +
        "<div class=\"agile_top_brand_left_grid w3l_agile_top_brand_left_grid\">\n" +
        "<div class=\"agile_top_brand_left_grid1\">\n" +
        "<figure>\n" +
        "<div class=\"snipcart-item block\">\n" +
        "<div class=\"snipcart-thumb\">\n" +
        "<a href=\"mirror.html\"><img src=\"src/images/4.jpg\" alt=\" \" class=\"img-responsive\" /></a>\n" +
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

function creatdiv_collect(){
    var surprise = document.getElementById('collect_container');
    var clear = document.createElement("div");
    clear.innerHTML += "<div class=\"clearfix\"> </div>";

    surprise.innerHTML += "<div class=\"w3ls_w3l_banner_nav_right_grid1\">"+
                          "<div class=\"col-md-3 w3ls_w3l_banner_left\">"+
                          "<div class=\"hover14 column\">"+
                          "<div class=\"agile_top_brand_left_grid w3l_agile_top_brand_left_grid\">"+
                          "<div class=\"agile_top_brand_left_grid1\">"+
                          "<figure>"+
                          "<div class=\"snipcart-item block\">"+
                          "<div class=\"snipcart-thumb\">"+
                          "<a href=\"single.html\"><img src=\"src/images/17.jpg\" alt=\" \" class=\"img-responsive\" /></a>"+
                          "<p>food for adult dogs (80 gms)</p>"+
                          "<h4>$3.00</h4></div>"+
                          "<div class=\"snipcart-details\">"+
                          "<button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" data-id=\"25\" data-name=\"Food for adult dogs\" data-summary=\"summary 25\" data-price=\"3.00\" data-quantity=\"1\" data-image=\"images/25.png\"data-toggle=\"modal\" data-target=\"#myModal\"style=\"margin-left: 30%\" >购买</button>"+
                          "</div> </div> </figure> </div> </div> </div> </div>";
    k++;
    while(k % 4 == 0)
    {
        surprise.appendChild(clear);
        break;
    }
}
/*
var name = new Array("A","B","C")
var Item = function (shop_id,shop_name,shop_cost,shop_img) {
    var _shop_id , _shop_name, _shop_cost, _shop_img;
    this.setshopId = function (shop_id) {
        _shop_id = shop_id;
    }
    this.getshopId = function () {
        return _shop_id;
    }
    this.setName = function (shop_name) {
        _shop_name = shop_name;
    }
    this.getName = function () {
        return _shop_name;
    }
    this.setCost = function (shop_cost) {
        _shop_cost = shop_cost;
    }
    this.getCost = function () {
        return _shop_cost;
    }
    this.setImg = function (shop_img) {
        _shop_img = shop_img;
    }
    this.getImg = function () {
        return _shop_img;
    }
    this.setshopId(shop_id);
    this.setName(shop_name);
    this.setCost(shop_cost);
    this.setImg(shop_img);
}
Item.prototype = {
    constructor: Item,

};

var p1 = new Item("1","ABC","10","src/images/4.jpg")
*/

var shop_data = {
    "info":
        [
            {
                "shopid":"1",
                "shopname":"AAA",
                "shopcost":"111",
                "shopimg":"src/images/4.jpg"
            },
            {
                "shopid":"2",
                "shopname":"BBB",
                "shopcost":"222",
                "shopimg":"src/images/5.jpg"
            },
            {
                "shopid":"3",
                "shopname":"CCC",
                "shopcost":"333",
                "shopimg":"src/images/6.jpg"
            },
            {
                "shopid":"4",
                "shopname":"DDD",
                "shopcost":"444",
                "shopimg":"src/images/7.jpg"
            },
            {
                "shopid":"5",
                "shopname":"EEE",
                "shopcost":"555",
                "shopimg":"src/images/8.jpg"
            }
        ]
};

var shopname1 = new Array("AA","BB","CC")
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
        shop_data.info[1].shopimg +
        "' class=\"img-responsive\"" +
        "alt=\" \" /></a>\n" +
        "<p>" +
        shopname1[2] +
        "</p>\n" +
        "<h4>￥" +
        cost[2] +
        "</h4>\n" +
        "</div>\n" +
        "<div class=\"snipcart-details\">\n" +
        "<a href='" +
        url[1] +
        "' <button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" >购买</button></a>\n" +
        "<button class=\"btn btn1-danger my-cart-btn1 hvr-sweep-to-right\"  onclick=\"collect()\t\" >收藏</button>\n" +
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

//遍历显示所有商品
function total_total()
{
    var surprise = document.getElementById('banner');
    var clear = document.createElement("div");
    clear.innerHTML += "<div class=\"clearfix\"> </div>";

    for(var total = 0; total < shop_data.info.length ; total++)
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