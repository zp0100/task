   //输出0~8,的随机数,用来绑定九宫格

   function numbox() {
    var num = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newnum = [];
    var a = 3;
    for (var b = 0; b < a; b++) {
        var ran = Math.round(Math.random() * (num.length - 1));
        newnum.push(num[ran]);
        num.splice(ran, 1);
    }
    return newnum;
}
//绑定九宫格的序号
var bb = numbox();
var cl0 = document.getElementsByClassName('box1')[bb[0]];
var cl1 = document.getElementsByClassName('box1')[bb[1]];
var cl2 = document.getElementsByClassName('box1')[bb[2]];
//输出随机的16进制颜色,添加给绑定的九宫格
function col() {
    var ne = []
    for (var a = 0; a < 6; a++) {

        var num = Math.floor(Math.random() * 16).toString(16);
        ne += num;
    }
    var coo = "#" + ne;
    return coo;
}
//设置函数start包裹,改变颜色的函数和计时器


//给绑定颜色的九宫格计时,让九宫格每隔一定时间就换一次颜色
function jishi() {
    //为颜色声明变量

    var color0 = col()
    var color1 = col()
    var color2 = col()
    //防止颜色重复
    if (color1 === color2 || color1 === color3 || color2 === color3) {
        var color1 = col();
        var color2 = col();
        var color3 = col();
    }
    //绑定九宫格的序号
    var bb = numbox();
    var cl0 = document.getElementsByClassName('box1')[bb[0]];
    var cl1 = document.getElementsByClassName('box1')[bb[1]];
    var cl2 = document.getElementsByClassName('box1')[bb[2]];
    //给绑定的九宫格改变颜色
    cl0.style.backgroundColor = color0;
    cl1.style.backgroundColor = color1;
    cl2.style.backgroundColor = color2;
    setTimeout(function () {
        cl0.style.backgroundColor = "burlywood";
        cl1.style.backgroundColor = "burlywood";
        cl2.style.backgroundColor = "burlywood";
    }, 995);
}
//为按钮声明变量
var cl3 = document.getElementsByClassName('button')[0];
var cl4 = document.getElementsByClassName('button')[1];
var myvar;
//点击开始,九宫格开始闪烁,按钮样式改变
function start() {
    clearInterval(myvar);
    myvar = setInterval(jishi, 1000);
    cl3.style.backgroundColor = "burlywood";
    cl3.style.color = "white";
    cl4.style.backgroundColor = "white";
    cl4.style.color = "burlywood";
}
//点击结束,清除九宫格闪烁,按钮样式改变
function end() {
    clearInterval(myvar);
    cl4.style.backgroundColor = "burlywood";
    cl4.style.color = "white";
    cl3.style.backgroundColor = "white";
    cl3.style.color = "burlywood";
}