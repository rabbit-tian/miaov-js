window.onload = function(){
    var stars = document.querySelectorAll('.star');
    var feedback = document.querySelector('.feedback');
    var len = stars.length;
    var starCurrSite = -1;

    var textArr = ['极差','一般','不错','推荐','力推'];

    for (var i = 0; i < len; i++){
        stars[i].index = i;

        //添加onmouseover事件
        // 不管是否有星星被点击, 鼠标移入时 永远是将当前和之前的星星变色，之后的星星还原
        stars[i].onmouseover = function () {
            for(var i = 0; i <= this.index; i++) {
                if (this.index < 2) {
                    stars[i].src = 'img/yawp.jpg';
                } else {
                    stars[i].src = 'img/satisfied.jpg';
                }
            }

           for(var j = this.index + 1; j < len; j++){ //然后将当前之后的星星还原
               stars[j].src='img/grey.jpg';
           }

            feedback.style.visibility = 'visible';
            feedback.innerHTML = textArr[this.index];
        };

        //添加onmouseout事件
        // 不管是否有星星被点击, 鼠标移出时 永远是将标记和之前的星星变色，之后的星星还原
        stars[i].onmouseout = function () {

            for(var j = 0; j <= starCurrSite; j++){
                if(starCurrSite<2){
                    stars[j].src='img/yawp.jpg';
                }else{
                    stars[j].src='img/satisfied.jpg';
                }
            }

            for(var i = starCurrSite+1; i < len; i++){
                stars[i].src='img/grey.jpg';
            }

            if(starCurrSite>-1){
                feedback.innerHTML = textArr[starCurrSite];
            }else{
                feedback.style.visibility = 'hidden';
            }


        };

        //添加点击事件
        stars[i].onclick = function(){
            if(starCurrSite == this.index){
                starCurrSite = -1;
            }else {
                starCurrSite = this.index;
            }
        };
    }
};