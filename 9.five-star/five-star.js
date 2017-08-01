window.onload = function(){
    var starBox = document.querySelector('.stars')
    var stars = document.querySelectorAll('.star');
    var feedback = document.querySelector('.feedback');
    var len = stars.length;
    var num = 0;

    var textArr = ['极差','一般','不错','推荐','力推'];

    starBox.onmouseover = function(){
        if(feedback.choose) return;
        feedback.style.visibility = 'visible';
    };

    starBox.onmouseout = function(){
        if(feedback.choose) return;
        feedback.style.visibility = 'hidden';
    };


    for (var i = 0; i < len; i++){
        stars[i].index = i;
        stars[i].choose = false;

        stars[i].onclick = function(){
            if(num <= 2) {
                for (var i = 0; i < num; i++){
                    stars[i].src = 'img/yawp.jpg';
                    stars[i].choose = true;
                }
            }else if(num>2){
                for (var i = 0; i < num; i++){
                    stars[i].src = 'img/satisfied.jpg';
                    stars[i].choose = true;
                }
            }

            feedback.choose = true;
            feedback.innerHTML = textArr[this.index];
            feedback.visibility = 'visible';
        };

        stars[i].onmouseover = function () {
            num = this.index + 1;
            if(num <= 2) {
                for (var i = 0; i < num; i++){
                    stars[i].src = 'img/yawp.jpg';
                }
            }else if(num>2){
                for (var i = 0; i < num; i++){
                    stars[i].src = 'img/satisfied.jpg';
                }
            }
            feedback.innerHTML = textArr[this.index];

        };

        stars[i].onmouseout = function () {
            if(this.choose) return;
            num = this.index + 1;
            for (var i = 0; i < num; i++){
                if(stars[i].choose){
                    continue;
                }
                stars[i].src = 'img/grey.jpg';
            }
        };
    }
};