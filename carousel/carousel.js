window.onload = function(){

    /*
    * 思路
    * 1. 做好常规的左右切换效果 #prev, #next
    * 2. 下面的小圆点随之切换
    * 3. 小圆点点击事件
    * 4. 自动播放
    * 5. 加上特效 (无缝滚动，透明切换)
    * */

    var carousel = document.querySelector('.carousel'); //轮播图框架
    var imgBox = document.querySelector('.img-box'); // 图片box
    var imgs = document.querySelectorAll('.img-box img'); //图片集合
    var prev = document.querySelector('.prev'); //上一张按钮
    var next = document.querySelector('.next'); //下一张按钮
    var dots = document.querySelectorAll('.dot-box span'); //小圆点集合

    var len = imgs.length; //图片个数
    var index = 0; //初始化图片下标
    var timer; //设置定时器变量

    //页面加载后，计算图片box总宽度, 第一个小圆点高亮
    imgBox.style.width = 960 * len + 'px'; //图片box的总宽度
    dots[0].className = 'active';


    //上一张 下一张 按钮事件
    prev.onclick = function(){
        index--;
        if(index < 0){
            index = len - 1;
        }
        animate(index);
    };

    next.onclick = function(){
        index++;
        if(index > len - 1) {
            index = 0;
        }
        animate(index);
    };

    //小圆点 按钮事件
    for (var i = 0; i < len; i++){
        dots[i].onclick = function (){
            if(this.className == 'active') return; //优化
            var currentIndex = this.getAttribute('data-index');
            index = currentIndex;
            animate (index);
        }
    }


    //定义imgbox移动
    function animate(index){
        imgBox.style.left = '-' + index * 960 + 'px';

        blink(index);
    }

    //定义小圆点闪烁
    function blink(index){
        for(var i = 0; i < len; i++){
            if(dots[i].className == 'active'){
                dots[i].className = '';
                break;
            }
        }
        dots[index].className = 'active';
    }

    //自动播放功能
    carousel.onmouseover = stop;
    carousel.onmouseout = autoPlay;

    //自动播放
    function autoPlay () {
        timer = setInterval(function(){
            next.onclick();
            },4000
        );
    }

    //停止播放
    function stop () {
        clearInterval(timer);
    }

    //页面加载时默认自动播放，当鼠标移上轮播图再停止播放
    autoPlay();
};