document.getElementById("myInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        newElement();
    }
});


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}




// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Update button icon and save preference
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});


// Fullscreen toggle functionality
const fullscreenToggle = document.getElementById('fullscreenToggle');
let isFullscreen = false;

fullscreenToggle.addEventListener('click', function() {
    if (!isFullscreen) {
        // Enter fullscreen
        body.classList.add('fullscreen-mode');
        fullscreenToggle.textContent = '⛉'; // Exit fullscreen icon
        fullscreenToggle.title = 'Exit Fullscreen';
        isFullscreen = true;
    } else {
        // Exit fullscreen
        body.classList.remove('fullscreen-mode');
        fullscreenToggle.textContent = '⛶'; // Enter fullscreen icon
        fullscreenToggle.title = 'Enter Fullscreen';
        isFullscreen = false;
    }
});

// Exit fullscreen with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isFullscreen) {
        body.classList.remove('fullscreen-mode');
        fullscreenToggle.textContent = '⛶';
        fullscreenToggle.title = 'Enter Fullscreen';
        isFullscreen = false;
    }
});