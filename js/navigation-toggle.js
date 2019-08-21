const buttonTags = document.querySelectorAll('.c-navigation__list-item');
let arrowTags = document.querySelectorAll('.c-navigation__arrow');
console.log(buttonTags);



buttonTags.forEach(function(buttonTag) {
  buttonTag.addEventListener('click', function(event){
event.currentTarget.classList.toggle('c-navigation__list-item--is-active');
event.currentTarget.querySelector('.c-navigation__arrow').classList.toggle('c-navigation__arrow--is-active');

  });
});
