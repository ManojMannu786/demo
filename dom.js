/*const ul= document.querySelector('.items');

ul.firstElementChild.textContent='Hello';
ul.firstElementChild.style.color='green';
ul.children[1].style.color='yellow';*/

console.log(documnet.domain);
console.log(document.title);
console.log(document.URL)
document.title=hello;
console.log(document.dooctype)
console.log(document.head)
console.log(document.body);
console.log(document.all);
console.log(document.all[3]);
console.log(document.all[3].textcontent='hello');
console.log(document.forms[0]);
console.log(document.links);

//get ElementByClassName
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var items = document.getElementsByClassName('list-group-item');
items[1].textcontent='hello';
item[1].style.fontweight= 'bold';
item[1].style.textColor='green';
//gives error
//items.style.background = '#f4f4f4';

for(let i=0; i<items.length; i++){
    items[1].style.fontweight ='bold';
}
items[2].style.background='green';

//getElementByTagName
var li = document.getElementsByTagName('li');
li[1].textcontent='hello';
li[1].style.fontweight= 'bold';
li[1].style.textColor='green';
//gives error
//items.style.background = '#f4f4f4';

for(let i=0; i<li.length; i++){
    li[1].style.fontweight ='bold';
}
li[2].style.background='green';

//QuerySelector
var header= document.querySelector('.main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value="SENd";

var item = document.querySelector('.list-group-item');
item.style.color = "red";


var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color= "blue";

var secondItem= document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundcolor ="green";
var thirdItem= document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.display ="none";

//querySelectorAll
var SecondItem= document.querySelectorAll('.list-group-item');
SecondItem[1].style.fontColor ="green";

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}

//Traversing the Dom
var itemList = document.querySelector('#items');

//parentNode
console.log(itemList.parentsNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement);

//childNodes
console.log(itemList.childNodes);

//children
console.log(itemList.children);  //HTML collection
console.log(itemList.children[1]);
itemList.children[1].style.background='yellow';

//firstChild
console.log(itemList.firstsChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textcontent='Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);

//createElement

//create div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id= 'hello2';

//add attribute
newDiv.setAttribute('tittle', 'HEllo Div');

//create text node
var newDivTExt= document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivTExt);

// assign newDiv into the DOM
var container = document.querySelector('header .container'); //parent node where new div have to assign
var h1 = document.querySelector('header h1'); //next sibling after assigning of newdiv into the dom
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1); //assigning of new div just before the h1 tag

var title= document.querySelector('ul .list-group');
var item1= document.querySelector('li .list-group-item');
title.insertBefore(newDiv, item1);