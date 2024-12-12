// News Text section function
let style = document.createElement('style');
let position = "right";
style.innerHTML = `@keyframes my-animation {
  0%{${position}: -${document.querySelector('.text').offsetWidth + 10}px;}
  100%{${position}: 100%;}
}`;
document.head.append(style);



// WOW JS Function
new WOW().init();