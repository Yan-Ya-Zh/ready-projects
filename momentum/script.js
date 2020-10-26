// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
//const showAmPm = true;

// Show Time
const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    day = today.getDay(),
    date = today.getDate(),
    month = today.getMonth();

  switch (day) {
    case 0: day = 'Воскресенье';
    break;
    case 1: day = 'Понедельник';
    break;
    case 2: day = 'Вторник';
    break;
    case 3: day = 'Среда';
    break;
    case 4: day = 'Четверг';
    break;
    case 5: day = 'Пятница';
    break;
    case 6: day = 'Суббота';
    break;
  }

  switch (month) {
    case 0: month = 'января';
    break;
    case 1: month = 'февраля';
    break;
    case 2: month = 'марта';
    break;
    case 3: month = 'апреля';
    break;
    case 4: month = 'мая';
    break;
    case 5: month = 'июня';
    break;
    case 6: month = 'июля';
    break;
    case 7: month = 'августа';
    break;
    case 8: month = 'сентября';
    break;
    case 9: month = 'октября';
    break;
    case 10: month = 'ноября';
    break;
    case 11: month = 'декабря';
    break;
  }

                                                                                                    // Set AM or PM
                                                                                                    //const amPm = hour >= 12 ? 'PM' : 'AM';

                                                                                                    // 12hr Format
                                                                                                    // hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec)}<br>${day}, ${date} ${month}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
const setBgGreet = () => {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {

  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}


// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
      if (name.textContent === '') {
        name.textContent = '[Enter Name]';
      }
    }
  } else  if (name.textContent === '') {
    name.textContent = '[Enter Name]';
    localStorage.setItem('name', e.target.innerText);
  }
  else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  focus.onclick
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
      if (focus.textContent === '') {
        focus.textContent = '[Enter Focus]';
      }
    }
  } else if (focus.textContent === '') {
    focus.textContent = '[Enter Focus]';
    localStorage.setItem('focus', e.target.innerText);
  }
  else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

const cleartext = (yourtext) => {
yourtext.textContent = '';
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();