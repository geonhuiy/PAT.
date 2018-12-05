'use strict';

  /* ------------------------+-------------------------------+
  |   .----.  .--.  .---.    |  CREATED BY TEAM JJS          |
  |   | {}  }/ {} \{_   _}   +-------------------------------+
  |   | .--'/  /\  \ | |     |  Joonas Kauppinen             |
  |   `-'   `-'  `-' `-'     |  "Jamie" GeonHui Yoon         |
  |   - a place for pets -   |  Samuli Virtanen              |
  +--------------------------+-------------------------------+
  | https://github.com/joonasmkauppinen/pat-project-backend  |
  | https://github.com/joonasmkauppinen/pat-project-frontend |
  +-------------------------------------------------------- */

const menu = document.getElementById('menu');
const radioButtons = document.querySelectorAll('input[type="radio"] ~ label');

const tabsWrapper = document.querySelector('.tab-views');
const newPostView = document.querySelector('.new-post-form-wrapper');
const newPostButton = document.getElementById('new-post');
const newPostCancelButton = document.getElementById('new-post-cancel');

const bottomNav = document.querySelector('.bottom-nav-bar');

const tabElements = document.querySelectorAll('.tab');

const transitionSpeed = 130;

let currentTab = 0;
const HOME    = 0,
      SEARCH  = 1,
      PROFILE = 2;

const hideTabWithTransition = (tab) => {
  const targetTab = tabElements[tab];
  targetTab.classList.toggle('visible');
  setTimeout(() => {
    targetTab.classList.toggle('show-element');
  }, transitionSpeed);
}
const showTabWithTransition = (tab) => {
  const targetTab = tabElements[tab];
  targetTab.classList.toggle('show-element');
  setTimeout(() => {
    targetTab.classList.toggle('visible');
  }, transitionSpeed);
}

const changeToTab = (tab) => {
  hideTabWithTransition(currentTab);
  currentTab = tab;
  setTimeout(() => {
    showTabWithTransition(currentTab);
  }, transitionSpeed);
}

document.getElementById('home-btn')
.addEventListener('change', ()=> {
  changeToTab(HOME);
});

document.getElementById('search-btn')
.addEventListener('change', ()=> {
  changeToTab(SEARCH);
});

document.getElementById('profile-btn')
.addEventListener('change', ()=> {
  changeToTab(PROFILE);
});

const toggelNewPostView = () => {
  tabsWrapper.classList.toggle('hidden');
  newPostView.classList.toggle('new-post-hidden');
  bottomNav.classList.toggle('bottom-nav-hidden');
}

newPostButton.addEventListener('click', () => {
  location.href = "#new-post";
  toggelNewPostView();
});
newPostCancelButton.addEventListener('click', () => {
  window.history.back();
  toggelNewPostView();
});

menu.addEventListener('change', ()=> {
	bottomNav.classList.toggle('visible');
  newPostButton.classList.toggle('btn-hidden');
  radioButtons.forEach(element => {
    element.classList.toggle('btn-hidden');
  });
});