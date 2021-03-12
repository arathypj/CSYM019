function printNum() {
    alert(1);
    alert(2);
    alert(3);
    alert(4);
    alert(5);
}
//printNum();
//printNum();


function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

//print5();
//print5();

function loadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
    
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New paragraph text';
}

//document.addEventListener('DOMContentLoaded', loadFunction);

//document.addEventListener('click', loadFunction);


function editPara() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
}

function editHeading() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New paragraph contents';
}

// function myLoadFunction() {
//     var element = document.getElementById('pageheading');
//     element.addEventListener('click', editHeading);
//     var element = document.getElementById('paragraph');
//     element.addEventListener('click', editPara);
// }

//document.addEventListener('DOMContentLoaded', myLoadFunction);

function clickFunction() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}

function myLoadFunction() {
    var element = document.getElementById('myinput');
    element.addEventListener('keyup', clickFunction);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);