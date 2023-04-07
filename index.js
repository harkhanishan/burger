
let bLeft = document.querySelector('#ourmenu .container .menuitems .prev'); //prev button
let bRight = document.querySelector('#ourmenu .container .menuitems .next'); //next button

var x = document.querySelectorAll('#ourmenu .container .menuitems ul li');//select all the items in container 
var l = x.length;//to get total number of element in container
var p = 0;

hideLeft(); //hide the prev button at first

bLeft.onclick = function () {//if user clicks left button

  p += 240; //scroll left by 240

  x.forEach((x) => {
    x.style.transition = '2s';
    x.style.transform = `translateX(${p}px)`;
  });

  hideLeft();//handle the left button if necessary
  hideRight();//handle the right button if necessary
};

bRight.onclick = function () {//if user clicks right button 

  p -= 240; //scroll right by 240

  x.forEach((x) => {
    x.style.transition = '2s';
    x.style.transform = `translateX(${p}px)`;
  });

  hideLeft();//handle the left button if necessary
  hideRight();//handle the right button if necessary
};

function hideLeft() {//function to handle left button

  if (p == 0) {//condition to stop the scrolling in left direction
    bLeft.style.display = 'none';
  }
  else {
    bLeft.style.display = 'block';
  }
}

function hideRight() {//function to handle right button

  if (p <= -((l - 4) * 240)) {//condition to stop the scrolling in right direction
    bRight.style.display = 'none';
  }
  else {
    bRight.style.display = 'block';
  }

}

const menu = document.querySelector('.navbar ul');
const menuicon = document.querySelector('.menubar .menulogo');

menuicon.addEventListener('click', () => {
  
  if (!Array.from(menu.classList).includes("tempdisplay")){
    menuicon.innerHTML = '<svg stroke="currentColor" fill="#b04d00" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"></path></g></svg>';
    menu.classList.add("tempdisplay");
  }
  else{
    menuicon.innerHTML = '<svg stroke="currentColor" fill="#b04d00" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>';
    menu.classList.remove("tempdisplay");
  }
  console.log(menu.classList);

});
