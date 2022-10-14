const barNav = document.querySelector("nav");
const body = document.querySelector('body');
const icons = document.querySelectorAll(".material-symbols-outlined");
const bgImg = document.querySelector("[alt='buso-academlo']");
const header = document.querySelector("header");
const anchor = document.querySelectorAll("[href='#']")


body.addEventListener('click',(e)=>{
  header.style.color = 'white';
  anchor.style.color = "white";
  barNav.style.backgroundColor ="#1b1a23";
  body.style.backgroundColor = "#1f1d2a";
  bgImg.style.backgroundColor = "#9adde0";
  //icons.style.backgroundColor ="white"
});