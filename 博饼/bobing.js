
//function bobing(){

var arra= ["","","","","",""];
var flag;
  var random=Math.floor(Math.random()*5);
    if(random==0){document.getElementById("touzi1").src = "touzi1.png" ;}
    if(random==1){document.getElementById("touzi1").src = "touzi2.png" ;}
    if(random==2){document.getElementById("touzi1").src = "touzi3.png" ;}
    if(random==3){document.getElementById("touzi1").src = "touzi4.png" ;}
    if(random==4){document.getElementById("touzi1").src = "touzi5.png" ;}
    if(random==5){document.getElementById("touzi1").src = "touzi6.png" ;}
    arra[random]++;
    var random=Math.floor(Math.random()*5);

    if(random==0){document.getElementById("touzi2").src = "touzi1.png" ;}
    if(random==1){document.getElementById("touzi2").src = "touzi2.png" ;}
    if(random==2){document.getElementById("touzi2").src = "touzi3.png" ;}
    if(random==3){document.getElementById("touzi2").src = "touzi4.png" ;}
    if(random==4){document.getElementById("touzi2").src = "touzi5.png" ;}
    if(random==5){document.getElementById("touzi2").src = "touzi6.png" ;}
    arra[random]++;
    var random=Math.floor(Math.random()*5);

    if(random==0){document.getElementById("touzi3").src = "touzi1.png" ;}
    if(random==1){document.getElementById("touzi3").src = "touzi2.png" ;}
    if(random==2){document.getElementById("touzi3").src = "touzi3.png" ;}
    if(random==3){document.getElementById("touzi3").src = "touzi4.png" ;}
    if(random==4){document.getElementById("touzi3").src = "touzi5.png" ;}
    if(random==5){document.getElementById("touzi3").src = "touzi6.png" ;}
    arra[random]++;
    var random=Math.floor(Math.random()*5);

    if(random==0){document.getElementById("touzi4").src = "touzi1.png" ;}
    if(random==1){document.getElementById("touzi4").src = "touzi2.png" ;}
    if(random==2){document.getElementById("touzi4").src = "touzi3.png" ;}
    if(random==3){document.getElementById("touzi4").src = "touzi4.png" ;}
    if(random==4){document.getElementById("touzi4").src = "touzi5.png" ;}
    if(random==5){document.getElementById("touzi4").src = "touzi6.png" ;}
    arra[random]++;

    var random=Math.floor(Math.random()*5);
    if(random==0){document.getElementById("touzi5").src = "touzi1.png" ;}
    if(random==1){document.getElementById("touzi5").src = "touzi2.png" ;}
    if(random==2){document.getElementById("touzi5").src = "touzi3.png" ;}
    if(random==3){document.getElementById("touzi5").src = "touzi4.png" ;}
    if(random==4){document.getElementById("touzi5").src = "touzi5.png" ;}
    if(random==5){document.getElementById("touzi5").src = "touzi6.png" ;}
    arra[random]++;

    var random=Math.floor(Math.random()*5);
    if(random==0){document.getElementById("touzi6").src = "touzi1.png" ;}
    if(random==1){document.getElementById("touzi6").src = "touzi2.png" ;}
    if(random==2){document.getElementById("touzi6").src = "touzi3.png" ;}
    if(random==3){document.getElementById("touzi6").src = "touzi4.png" ;}
    if(random==4){document.getElementById("touzi6").src = "touzi5.png" ;}
    if(random==5){document.getElementById("touzi6").src = "touzi6.png" ;}
    arra[random]++;

    if(arra[0]==2&&arra[3]==4)  {
      document.getElementById("own1").innerHTML = "恭喜你获得了 '金花' ！"+'<br>'+"获得macbook一台";
      flag=1;
    }
    else if(arra[3]==6){
      document.getElementById("own1").innerHTML= "恭喜你获得了 '六杯红' ！"+'<br>'+"获得iPad2021一台";
      flag=2;
    }
    else if(arra[0]==6){
      document.getElementById("own1").innerText   = "恭喜你获得了 '遍地锦' ！"+'<br>'+"获得ipod 7一台";
      flag=3;
    }
    else if(arra[1]==6){
      document.getElementById("own1").innerHTML= "恭喜你获得了 '黑六勃' ！"+'<br>'+"获得耳机一对";
      flag=4;
    }
    else if(arra[0]==1&&arra[3]==4){
      document.getElementById("own1").innerHTML = "恭喜你获得了 '五红' ！"+'<br>'+"获得加湿器一台";
      flag=5;
    }
    else if(arra[1]==5){
      document.getElementById("own1").innerText  = "恭喜你获得了 '五子登科' ！"+'<br>'+"获得烤箱一台";
      flag=6;
    }
    else if(arra[3]==4){
      document.getElementById("own1").innerHTML = "恭喜你获得了 '四点红' !"+'<br>'+"获得化妆品一个";
      flag=7;
    }
    else if(arra[0]==1&&arra[1]==1&&arra[2]==1&&arra[3]==1&&arra[4]==1&&arra[5]==1||arra[1]==3&&arra[2]==3){
      document.getElementById("own1").innerHTML= "恭喜你获得了 '对堂' ！"+'<br>'+"获得会员一个月";
      falg=8;
    }
    else if(arra[3]==3){
      document.getElementById("own1").innerHTML= "恭喜你获得了 '三红' !"+'<br>'+"获得洗衣液一瓶";
      flag=9;
    }
    else if(arra[1]==4){
      document.getElementById("own1").innerHTML= "恭喜你获得了 '四进' !"+'<br>'+"获得纸巾一包";
      flag=10
    }
    else if(arra[3]==2){
      document.getElementById("own1").innerHTML= "恭喜你获得了 '二举' !"+'<br>'+"获得咖啡一包";
      flag=11;
    }
    else if(arra[3]==1){
      document.getElementById("own1").innerHTML= "恭喜你获得了 '一秀才' !"+'<br>'+"获得口罩一个";
      flag=12;
    }
    else {
      document.getElementById("own1").innerHTML= "很遗憾你什么都没得到！";
      flag=13;
    }
        var record=JSON.parse(localStorage.getItem('key'));
        if(!record || record.length ===0){
          record=[];
        }
        record.push(flag);
    localStorage.setItem('key',JSON.stringify(record) );
//将localStorage传递到哪个页面
//设置localStorage
//location.href='history.html';
//window.localStorage.setItem('own1','你好');

//}

//function jump(){
 // var s = document.getElementsByTagName('input')[0];
 // location.href='history.html?'+'txt=' + encodeURI(s.id);
//}
