 $(document).ready(function(){  //Username Validation 

    
 var $usernameInput = $('.username')
      var $usernameInputGroup = $usernameInput.parent()
      var $usernameError = $('.username-help-text')
      var blacklist = [
        'ginger',
        'lupe',
        'quin',
        'april',
        'eden',
        'kristin',
        'nancy',
        'janice',
        'alexis'
       ]

      var usernameUsed = function (name) {
        return blacklist.indexOf(name) > -1
      }

      var clearError = function () {
        $usernameInputGroup.removeClass('has-error')
        $usernameError.text('')
      }

      var setError = function () {
        $usernameInputGroup.addClass('has-error')
        $usernameError.text('the username: ' + $usernameInput.val() + ' is already taken.')
      }

      var updateUsername = function (e) {
        // get my username
        var username = $usernameInput.val()
        // is my username unique
        var usernameUnique = !usernameUsed(username)
        if (usernameUnique) {
        // if my username is unique, get rid all the errors
          clearError()
        } else {
        // if isn't show me an error
          setError()
        }
      }
      $usernameInput.on('change', updateUsername)

;
//EMAIL SUFFIX VALIDATION
  function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#result").text(email + " is valid :)");
    $("#result");
  } else {
    $("#result").text(email + " is not valid :(");
    $("#result");
  }
  return false;
}

$("form").bind("change", validate);
    function checkbae(){
        if (document.layers || document.getElementById || document.all)
            return checkemail()
        else
            return true
    }

//PASSWORD LENGTH
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#myform" ).validate({
  rules: {
    password: {
      required: true,
      minlength: 8,
    },
    password_again: {
      equalTo: "#password",
      required: true,
      minlength: 8,
    },
  }
});
}); 
