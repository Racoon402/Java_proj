var btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
    var list = document.getElementsByClassName('project-area1')[0];
    var item = document.createElement('li');
    var text = prompt("추가할 이름을 입력해주세요",'')
    if(text !== null && text !== ''){
        item.textContent = text;
        list.appendChild(item);
    }
});

var btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
    var list = document.getElementsByClassName('project-area2')[0];
    var item = document.createElement('li');
    var text = prompt("추가할 이름을 입력해주세요",'')
    if(text !== null && text !== ''){
        item.textContent = text;
        list.appendChild(item);
    }
});

var titleList = document.getElementsByTagName('a');
var contentList = document.getElementsByClassName('m1');

function display(title, content){
    for(var i = 0; i < contentList.length; i++){
        contentList[i].classList.remove('show');
        titleList[i].classList.remove('highlight');
        tabletTitleList[i].classList.remove('highlight');
        tableContentList[i].classList.remove('show');
    }

    title.classList.add('highlight');
    content.classList.add('show');
}

for(var i=0; i<contentList.length; i++){
    (function(index) {
        titleList[index].addEventListener('click', function() {
            display(titleList[index], contentList[index]);
        });
    })(i);
}

var tabletTitleList = document.getElementsByTagName('li');
var tableContentList = document.getElementsByClassName('table');

function displayTable(title, content){
    for(var i = 0; i < tableContentList.length; i++){
        tableContentList[i].classList.remove('show');
        tabletTitleList[i].classList.remove('highlight');
    }

    title.classList.add('highlight');
    content.classList.add('show');
}

for(var i=0; i<tableContentList.length; i++){
    (function(index) {
        tabletTitleList[index].addEventListener('click', function() {
            displayTable(tabletTitleList[index], tableContentList[index]);
        });
    })(i);
}