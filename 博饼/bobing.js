/*var app = new Vue({
    el: '#app',
    data: {
        dialogTableVisible: false,
        curImg: ''
    },
    methods: {
        bobing: function () {
            //步骤一:创建异步对象
            var ajax = new XMLHttpRequest();
            //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
            ajax.open('post', 'http://network.vip3gz.idcfengye.com/bobing');
            ajax.withCredentials = true;
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //步骤三:发送请求
            ajax.send('&touzi');
            //步骤四:注册事件 onreadystatechange 状态改变就会调用
            ajax.onreadystatechange = function (data) {
              if (ajax.readyState == 4 && ajax.status == 200) {
                let respon = JSON.parse(ajax.response);
                if (!respon.success) {
                  alert(respon.msg);
                } 
                else if(respon==1){

                }
                //else {
                    //openRow();
                    //var img =document.createElement("img");
                    //img.src=this.result;
                    //document.getElementById("show").appendChild(img);
                    //console.log(nfder.responseText);
                //}
                //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的　　　　console.log(nfder.responseText);//输入相应的内容  　　}
              }
            }
          },

          openRow(fileId){
            this.dialogTableVisible=true;
            this.curImg='http://network.vip3gz.idcfengye.com/download?fileId='+fileId;
          }
        }
    }) */
    //function select(starNumber,endNumber){
      //var b=(int)(Math.random()*6);//生成[0,9]之间的随机整数。
      //var temp=m+(int)(Math.random()*(n+1-m)); //生成从m到n的随机整数[m,n]
      //return b;
    //}
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