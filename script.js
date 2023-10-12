const button = document.querySelector('button');
const section = document.querySelector('section');
const body = document.querySelector('body');

button.onclick = function(event){
  event.target.parentNode.removeChild(event.target);
  section.innerHTML = '<iframe src="https://giphy.com/embed/Z9WQLSrsQKH3uBbiXq"></iframe>';
  body.style.background = 'black';
}
