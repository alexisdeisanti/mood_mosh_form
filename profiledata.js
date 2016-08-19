
var fullname = "Dwayne Jackson-Hughes"
        document.getElementById('fullname').innerHTML = fullname;
    
var aboutMe = "My husband and I love entertaining at home. I’m a good cook and I love experimenting with food. My friends and family are all too willing victims to my creations. Plus they’ll do the dishes.";
    document.getElementById("aboutme").innerHTML = aboutMe;

var status = "less";

function toggleText()
{
    var text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tristique nibh, vel sollicitudin ex. Suspendisse rutrum placerat felis vitae scelerisque. ";

    if (status == "less") {
        document.getElementById("aboutmemore").innerHTML=text;
        document.getElementById("toggleButton").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("aboutmemore").innerHTML = "";
        document.getElementById("toggleButton").innerText = "See More";
        status = "less"
    }
}
var favoriteColor = "#438B7E"
// document.getElementById("color").style.color = favoriteColor;
document.getElementById("colordiv").style.backgroundColor = favoriteColor;

var city = "Santa Barbara";
document.getElementById("city").innerHTML = city;

var state = "CA";
document.getElementById("state").innerHTML = state;

var birthday = "August 19th";
document.getElementById("birthday").innerHTML = birthday;

// var favoriteSeason = "Autumn";
// document.getElementById("favoriteseason").innerHTML = favoriteSeason;

// var personalStyle = "Business-Casual";
// document.getElementById("personalstyle").innerHTML = personalStyle;

// var occupation = "Moosh";
// document.getElementById("occupation").innerHTML = occupation;

function dreamvacation() {
    var x = document.createElement("IMG");
    //Specify source of living room image here. O
    //Options: living01.jpg, living02.jpg, living03.jpg, living04.jpg
    x.setAttribute("src", "images/mm-vacations/mtn.jpg");
    x.setAttribute("width", "275");
    document.getElementById("dreamvaca").appendChild(x);
}
function lifestyle() {
    var x = document.createElement("IMG");
    //Specify source of living room image here. O
    //Options: living01.jpg, living02.jpg, living03.jpg, living04.jpg
    x.setAttribute("src", "images/mm-lifestyle/party.jpg");
    x.setAttribute("width", "200");
    document.getElementById("lifest").appendChild(x);
}
           
function livingroom() {
    var x = document.createElement("IMG");
    //Specify source of living room image here. O
    //Options: living01.jpg, living02.jpg, living03.jpg, living04.jpg
    x.setAttribute("src", "images/mm-livingroom/1.jpg");
    x.setAttribute("width", "275");
    document.getElementById("living").appendChild(x);
}

function profile() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "profile.png");
    // x.setAttribute("width", "200");
    document.getElementById("profile").appendChild(x);

var trueStatement = "I make most of the design decisions in the house";
document.getElementById("truestatement").innerHTML = trueStatement;

var interests = "The beach, Driving, Techno";
document.getElementById("interests").innerHTML = interests;
}

//CODE FOR IMAGE SLIDER
var interval = 5000; // You can change this value to your desired speed. The value is in milliseconds, so if you want to advance a slide every 5 seconds, set this to 5000.
var switching = setInterval("toggleSlide(true)", interval);
window.paused = false;
function toggleInterval() {
    var button = document.getElementById("pauseButton");
    if(!window.paused) {
        clearInterval(switching);
        button.value = "Resume";
    } else {
        switching = setInterval("toggleSlide(true)", interval);
        button.value = "Pause";
    }
    window.paused = !(window.paused);
}
// direction = boolean value: true or false. If true, go to NEXT slide; otherwise go to PREV slide
function toggleSlide(direction) {
    var elements = document.getElementsByClassName("hideable"); // gets all the "slides" in our slideshow
    
    // Find the LI that's currently displayed
    var visibleID = getVisible(elements);
    elements[visibleID].style.display = "none"; // hide the currently visible LI
    if(!direction) {
        var makeVisible = prev(visibleID, elements.length); // get the previous slide
    } else {
        var makeVisible = next(visibleID, elements.length); // get the next slide
    }
    elements[makeVisible].style.display = "block"; // show the previous or next slide
    var sn = document.getElementById("slideNumber");
    sn.innerHTML = (makeVisible + 1);
}
function getVisible(elements) {
    var visibleID = -1;
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].style.display == "block") {
            visibleID = i;
        }
    }
    return visibleID;
}
 
function prev(num, arrayLength) {
    if(num == 0) return arrayLength-1;
    else return num-1;
}
 
function next(num, arrayLength) {
    if(num == arrayLength-1) return 0;
    else return num+1;
}
function goToEdge(where) {
    var elements = document.getElementsByClassName("hideable");
    var visibleID = getVisible(elements);
    var firstButton = document.getElementById("firstButton");
    var lastButton = document.getElementById("lastButton");
    
    var sn = document.getElementById("slideNumber");
    elements[visibleID].style.display = "none";
    if(!where) {
        elements[0].style.display = "block";
        sn.innerHTML = 1;
    } else {
        elements[elements.length-1].style.display = "block";
        sn.innerHTML = elements.length;
    }
}
