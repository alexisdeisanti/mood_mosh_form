
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
var favoriteColor = "#66ff99"
// document.getElementById("color").style.color = favoriteColor;
document.getElementById("colordiv").style.backgroundColor = favoriteColor;

var city = "Los Angeles";
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
    x.setAttribute("width", "200");
    document.getElementById("profile").appendChild(x);

var trueStatement = "I make most of the design decisions in the house";
document.getElementById("truestatement").innerHTML = trueStatement;

var interests = "The beach, Driving, Techno";
document.getElementById("interests").innerHTML = interests;
}
