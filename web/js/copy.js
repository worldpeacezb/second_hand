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
    var surprise = document.getElementById('banner1');
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
    //
    //var div7 = document.getElementById('seven');
    var div7 = document.createElement("div");
    div7.className= "snipcart-thumb";

    //var div8 = document.getElementById('eight');
    var div8 = document.createElement("div");
    div8.className= "snipcart-details";


    div6.appendChild(div8);
    div6.appendChild(div7);
    div5.appendChild(div6);
    div4.appendChild(div5);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    surprise.appendChild(div1);



}

/*for (var i = 0; i < 4; i++)
{
    var dvelopment = document.getElementById('Dvelopment');

    var div11 = document.getElementById('one');
    dvelopment.appendChild(div11);
}
*/

