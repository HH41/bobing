
var arra = JSON.parse(localStorage.getItem("key"));
console.table(arra);
var line = '';
for (var i = 0; i < arra.length; i++) {
    if(arra[i]==1){
        arra[i]="恭喜你获得了 '金花' ！获得macbook一台";
    }
    else if(arra[i]==2){
        arra[i]="恭喜你获得了 '六杯红' ！获得iPad2021一台";
    }
    else if(arra[i]==3){
        arra[i]="恭喜你获得了 '遍地锦' !获得ipod 7一台";
    }
    else if(arra[i]==4){
        arra[i]="恭喜你获得了 '黑六勃' ！获得耳机一对";
    }
    else if(arra[i]==5){
        arra[i]="恭喜你获得了 '五红' ！获得加湿器一台";;
    }
    else if(arra[i]==6){
        arra[i]="恭喜你获得了 '五子登科' ！获得烤箱一台";
    }
    else if(arra[i]==7){
        arra[i]="恭喜你获得了 '四点红' ! 获得化妆品一个";
    }
    else if(arra[i]==8){
        arra[i]= "恭喜你获得了 '对堂' ！获得会员一个月";
    }
    else if(arra[i]==9){
        arra[i]="恭喜你获得了 '三红' ! 获得洗衣液一瓶";
    }
    else if(arra[i]==10){
        arra[i]="恭喜你获得了 '四进' ! 获得纸巾一包";
    }
    else if(arra[i]==11){
        arra[i]="恭喜你获得了 '二举' ! 获得咖啡一包";;
    }
    else if(arra[i]==12){
        arra[i]="恭喜你获得了 '一秀才' ! 获得口罩一个";
    }
    else if(arra[i]==13){
        arra[i]="很遗憾你什么都没得到！";
    }
    line+='<li>'+ arra[i] + '</li>';

    }
    document.getElementById('hbox').innerHTML=line;
//console.table(arra );
//document.getElementById("own3").innerHTML= arra;
/*if(arra[0]==2&&arra[3]==4)  {
    document.getElementById("own1").innerHTML = "恭喜你获得了 '金花' ！"+'<br>'+"获得macbook一台";
  }
  else if(arra[3]==6){
    document.getElementById("own1").innerHTML= "恭喜你获得了 '六杯红' ！"+'<br>'+"获得iPad2021一台";
  }
  else if(arra[0]==6){
    document.getElementById("own1").innerText   = "恭喜你获得了 '遍地锦' ！"+'<br>'+"获得ipod 7一台";
  }
  else if(arra[1]==6){
    document.getElementById("own1").innerHTML= "恭喜你获得了 '黑六勃' ！"+'<br>'+"获得耳机一对";
  }
  else if(arra[0]==1&&arra[3]==4){
    document.getElementById("own1").innerHTML = "恭喜你获得了 '五红' ！"+'<br>'+"获得iPad2021一台";
  }
  else if(arra[1]==5){
    document.getElementById("own1").innerText  = "恭喜你获得了 '五子登科' ！"+'<br>'+"获得烤箱一台";
  }
  else if(arra[3]==4){
    document.getElementById("own1").innerHTML = "恭喜你获得了 '四点红' !"+'<br>'+"获得化妆品一个";
  }
  else if(arra[0]==1&&arra[1]==1&&arra[2]==1&&arra[3]==1&&arra[4]==1&&arra[5]==1||arra[1]==3&&arra[2]==3){
    document.getElementById("own1").innerHTML= "恭喜你获得了 '对堂' ！"+'<br>'+"获得会员一个月";
  }
  else if(arra[3]==3){
    document.getElementById("own1").innerHTML= "恭喜你获得了 '三红' !"+'<br>'+"获得洗衣液一瓶";
  }
  else if(arra[1]==4){
    document.getElementById("own1").innerHTML= "恭喜你获得了 '四进' !"+'<br>'+"获得纸巾一包";
  }
  else if(arra[3]==2){
    document.getElementById("own1").innerHTML= "恭喜你获得了 '二举' !"+'<br>'+"获得咖啡一包";
  }
  else if(arra[3]==1){
    document.getElementById("own1").innerHTML= "恭喜你获得了 '一秀才' !"+'<br>'+"获得口罩一个";
  }
  else {
    document.getElementById("own1").innerHTML= "很遗憾你什么都没得到！";

  }*/
