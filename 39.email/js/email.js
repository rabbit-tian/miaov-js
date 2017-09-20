var emailJson = [
    {
        "id":"0",
        "title": "妙味课堂1",
        "content": "JS拖拽的进一步学习,移动与拖拽拉伸JS拖拽的进一步练习",
        "date": "2015-12-30"
    },
    {
        "id":"1",
        "title": "妙味课堂2",
        "content": "JS拖拽的进一步学习,移动与拖拽拉伸JS拖拽的进一步练习",
        "date": "2015-12-30"
    },
    {
        "id":"2",
        "title": "妙味课堂3",
        "content": "JS拖拽的进一步学习,移动与拖拽拉伸JS拖拽的进一步练习",
        "date": "2015-12-30"
    },
    {
        "id":"3",
        "title": "妙味课堂4",
        "content": "JS拖拽的进一步学习,移动与拖拽拉伸JS拖拽的进一步练习",
        "date": "2015-12-30"
    },
    {
        "id":"4",
        "title": "妙味课堂5",
        "content": "JS拖拽的进一步学习,移动与拖拽拉伸JS拖拽的进一步练习",
        "date": "2015-12-30"
    }
];


var ul = document.querySelector('.email-list');

//数组下的一个方法: map
var html = emailJson.map(function(item){
    return `<li class="clearfix">
            <input type="checkbox" class="pull-left" data-checkbox-id=${item.id}><h4 class="pull-left">${item.title}</h4>
            <span class="pull-right">${item.date}</span>
            <p class="pull-left clearboth">${item.content}</p>
            </li>`;
}).join('');


ul.innerHTML = html;



var checkboxs = ul.querySelectorAll('input');

var selectAll = document.querySelector('.select-all');

var deleteBtnLeft = document.querySelector('.del');

var deleteBtnTop = document.querySelector('.del-btn');

var num = 0; // checkbox选中数量

var tooltip = document.querySelector('.tooltip');


//单选功能
for(let i = 0; i < checkboxs.length; i++){

    checkboxs[i].onclick  = function(ev){

        var checkboxs = ul.querySelectorAll('input');

        if(!this.checked){
            selectAll.checked = false;
            this.parentNode.classList.remove('active');
            num--;
        }else{
            num++;

            if(num === checkboxs.length){
                selectAll.checked = true;
            }
            this.parentNode.classList.add('active');
        }
        //阻止checkbox点击事件冒泡
        ev.stopPropagation();
        console.log(num);
    };
}

//全选功能
selectAll.onclick = function(){

    var checkboxs = ul.querySelectorAll('.list input');

    // simple!!!!
    for(var i = 0; i < checkboxs.length; i++){
       checkboxs[i].checked = selectAll.checked;
        if(this.checked){
            checkboxs[i].parentNode.classList.add('active');
            num = checkboxs.length;
        }else{
            checkboxs[i].parentNode.classList.remove('active');
            num = 0;
        }
    }

    console.log(num);
};


ul.onmousedown = function(ev) {

    if (num > 0) {

        document.onmousemove = function (ev) {
            if(ev.target === deleteBtnLeft){
                ev.target.classList.add('active');
            }
            tooltip.classList.remove('hidden');
            tooltip.innerText = `选中${num}封邮件`;
            tooltip.style.left = ev.clientX - list.offsetLeft + window.pageXOffset + 5 + 'px';
            tooltip.style.top = ev.clientY - list.offsetTop + window.pageYOffset + 5 + 'px';
            return false;
        };
    }
    return false;

};

document.onmouseup = function(ev){
    document.onmousemove = null;
    tooltip.classList.add('hidden');
    if(ev.target === deleteBtnLeft){
        deleteEmail();
    }
};

deleteBtnTop.onclick = function(){
    deleteEmail();
};



function deleteEmail(){

    var selectedArr = getSelectItems();

    for(var i = 0; i < selectedArr.length; i++){

        selectedArr[i].parentNode.remove();
        num--;
        // delete emailJson[checkboxs[i].dataset.checkboxId]; // 用这个方法会出现undefined


        //在emailJson中将对应的数据删除
        for(var j = 0; j < emailJson.length; j++){
            if(emailJson[j].id === selectedArr[i].dataset.checkboxId){
                emailJson.splice(j,1);
            }
        }
    }

    selectAll.checked = false;
}


function getSelectItems(){
    var checkboxs = ul.querySelectorAll('.list input');
    var arr = [];
    for(var i = 0; i < checkboxs.length; i++){
        if(checkboxs[i].checked){
            arr.push(checkboxs[i]);
        }
    }

    return arr;
}


