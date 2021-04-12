const div = document.querySelector('div');
let width = window.innerWidth;
let height = window.innerHeight;

div.style.width = width + 'px';
div.style.height = height + 'px';

window.onresize = function(){
  width = window.innerWidth;
  height = window.innerHeight;
  div.style.width = width + 'px';
  div.style.height = height + 'px';
}