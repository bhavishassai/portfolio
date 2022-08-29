

const header = document.getElementsByClassName('header')[0];
const hamburger = document.getElementsByClassName('hamburger')[0];
const action_container = document.getElementsByClassName('action-container')[0];
const about_btn = document.getElementById('about_btn');
const blogs_btn = document.getElementById('blogs_btn');
const contact_btn = document.getElementById('contact_btn');
const projects_btn = document.getElementById('projects_btn');
const hire_btn = document.getElementById('hire_btn');



let is_hamburger_open = false;

hamburger.addEventListener('click', () => {
   
    if (is_hamburger_open) {
      is_hamburger_open = false;
      header.style.backgroundColor = '#fff';
      header.childNodes[1].style.color = '#000';
      action_container.style.visibility = 'hidden';
      hamburger.childNodes[0].src='assets/icons/hamburger_black.svg';
    }
    else {
      is_hamburger_open = true;
      action_container.style.visibility = 'visible';
      header.style.backgroundColor = '#000';
      header.childNodes[1].style.color = '#fff';
      hamburger.childNodes[0].src='assets/icons/hamburger_close_white.svg';
    }
}
);


function closeNavWindow() {
  if(window.innerWidth<=640){
  is_hamburger_open = false;
  header.style.backgroundColor = '#fff';
  header.childNodes[1].style.color = '#000';
  action_container.style.visibility = 'hidden';
  hamburger.childNodes[0].src='assets/icons/hamburger_black.svg';
  }
}
about_btn.addEventListener('click',closeNavWindow); 
blogs_btn.addEventListener('click',closeNavWindow);
projects_btn.addEventListener('click',closeNavWindow);
contact_btn.addEventListener('click',closeNavWindow);
hire_btn.addEventListener('click',closeNavWindow);


