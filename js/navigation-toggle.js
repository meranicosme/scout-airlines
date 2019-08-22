const buttonTags = document.querySelectorAll('.c-navigation__list-item > button');
const navListItems = [...buttonTags].map(function(buttonTag) {
  return buttonTag.parentElement;
});

let arrowTags = document.querySelectorAll('.c-navigation__arrow');
console.log(buttonTags);



navListItems.forEach(function(navListItem1) {
  navListItem1.addEventListener('click', function(event) {
    let buttonClicked = event.currentTarget;
    navListItems.forEach(function(navListItem2) {
      if (navListItem2 !== buttonClicked) {
        navListItem2.classList.remove('c-navigation__list-item--is-active');
        navListItem2.querySelector('.c-navigation__arrow').classList.remove('c-navigation__arrow--is-active');
      }
    });
    buttonClicked.classList.toggle('c-navigation__list-item--is-active');
    buttonClicked.querySelector('.c-navigation__arrow').classList.toggle('c-navigation__arrow--is-active');
  });
});
