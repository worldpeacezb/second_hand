function creat(t_s){
    var div1=document.createElement('div');
    div1.class = "w3ls_w3l_banner_nav_right_grid1";
    div1.style.cssText='width:320px;height:240px;border:1px solid #ff00ff;';
    var div2=document.createElement('div');
    div2.style.cssText='width:240px;height:180px;margin:auto;border:1px solid #0000ff;';
    div2.innerHTML=t_s;
    div1.appendChild(div2);
    document.body.appendChild(div1);
}

//创建新的商品栏
function creatdiv() {
    var surprise = document.getElementById('banner');
    surprise.innerHTML += "<div class=\"w3ls_w3l_banner_nav_right_grid1\">\n" +
        "\t\t\t\t\t<div class=\"col-md-3 w3ls_w3l_banner_left\">\n" +
        "\t\t\t\t\t\t<div class=\"hover14 column\">\n" +
        "\t\t\t\t\t\t<div class=\"agile_top_brand_left_grid w3l_agile_top_brand_left_grid\">\n" +
        "\t\t\t\t\t\t\t<div class=\"agile_top_brand_left_grid1\">\n" +
        "\t\t\t\t\t\t\t\t<figure>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"snipcart-item block\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"snipcart-thumb\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\"><img src=\"src/images/4.jpg\" alt=\" \" class=\"img-responsive\" /></a>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p>dishwash gel, lemon  (1.5 ltr)</p>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<h4>$8.00</h4>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"snipcart-details\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" id=\"17\" data-name=\"Dishwash gel, lemon\" data-summary=\"summary 17\" data-price=\"8.00\" data-quantity=\"1\" data-image=\"images/17.png\">购买</button>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn1-danger my-cart-btn1 hvr-sweep-to-right\" id=\"collect\" onclick=\"collect()\t\" >收藏</button>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger my-cart-btn2 \" style=\"margin-left: 10%\" id=\"no_collect\" onclick=\"no_collect()\">取消收藏</button>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</figure>\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>";
    /*
//4
    //var div1 = document.getElementById('one');
    var div1 = document.createElement("div");
    div1.className= "w3ls_w3l_banner_nav_right_grid1";
 //1
    //var div2 = document.getElementById('two');
    var div2 = document.createElement("div");
    div2.className= "col-md-3 w3ls_w3l_banner_left";
//
    //var div3 = document.getElementById('three');
    var div3 = document.createElement("div");
    div3.className= "hover14 column";

    //var div4 = document.getElementById('four');
    var div4 = document.createElement("div");
    div4.className= "agile_top_brand_left_grid w3l_agile_top_brand_left_grid";

    //var div5 = document.getElementById('five');
    var div5 = document.createElement("div");
    div5.className= "agile_top_brand_left_grid1";

    //var div6 = document.getElementById('six');
    var div6 = document.createElement("div");
    div6.className= "snipcart-item block";
    div6.innerHTML += "<div class=\"snipcart-thumb\" >\n" +
        "<a href=\"single.html\"><img src=\"src/images/4.jpg\" alt=\" \" class=\"img-responsive\" /></a>\n" +
        "<p>dishwash gel, lemon  (1.5 ltr)</p>\n" +
        "<h4>$8.00</h4>\n" +
        "</div>\n" +
        "<div class=\"snipcart-details\">\n" +
        "<button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" id=\"17\" data-name=\"Dishwash gel, lemon\" data-summary=\"summary 17\" data-price=\"8.00\" data-quantity=\"1\" data-image=\"images/17.png\">购买</button>\n" +
        "<button class=\"btn btn1-danger my-cart-btn1 hvr-sweep-to-right\" id=\"collect\" onclick=\"collect()\t\" >收藏</button>\n" +
        "<button class=\"btn btn-danger my-cart-btn2 \" style=\"margin-left: 10%\" id=\"no_collect\" onclick=\"no_collect()\">取消收藏</button>\n" +
        "</div>";
    //
    //var div7 = document.getElementById('seven');
   var div7 = document.createElement("div");
    div7.className= "snipcart-thumb";
    div7.innerHTML += "<a href=\"single.html\"><img src=\"src/images/4.jpg\" alt=\" \" class=\"img-responsive\" /></a>\n" +
        "<p>dishwash gel, lemon  (1.5 ltr)</p>\n" +
        "<h4>$8.00</h4>";

    //var div8 = document.getElementById('eight');
    var div8 = document.createElement("div");
    div8.className= "snipcart-details";
    div8.innerHTML += "<button class=\"btn btn-danger my-cart-btn hvr-sweep-to-right\" id=\"17\" data-name=\"Dishwash gel, lemon\" data-summary=\"summary 17\" data-price=\"8.00\" data-quantity=\"1\" data-image=\"images/17.png\">购买</button>\n" +
        "<button class=\"btn btn1-danger my-cart-btn1 hvr-sweep-to-right\" id=\"collect\" onclick=\"collect()\t\" >收藏</button>\n" +
        "<button class=\"btn btn-danger my-cart-btn2 \" style=\"margin-left: 10%\" id=\"no_collect\" onclick=\"no_collect()\">取消收藏</button>";
*/

  //  div6.appendChild(div8);
  //  div6.appendChild(div7);
 //   div5.appendChild(div6);
 //   div4.appendChild(div5);
  //  div3.appendChild(div4);
 //   div2.appendChild(div3);
 //   div1.appendChild(div2);
  //  surprise.appendChild(div1);



}

/*for (var i = 0; i < 4; i++)
{
    var dvelopment = document.getElementById('Dvelopment');

    var div11 = document.getElementById('one');
    dvelopment.appendChild(div11);
}
*/

