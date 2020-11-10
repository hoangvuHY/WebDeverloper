

console.log($('#role').val());
//identification: 1111111111111 pass: HotBoy9x

function validationForm() {
  //validation name
  var fullName = $("#fullName").val();
  if (fullName == '') {
    $("#errorFullName").text("Please enter full name").show();
    $("#fullName").focus();
    return false;
  } else {
    var patternFullName = /^\D+$/g
    if (!patternFullName.test(fullName)) {
      $("#errorFullName").text("Please enter right validation. Example: Hoàng Tuấn Vũ").show();
      $("#errorFullName").focus();
      return false;
    } else {
      $("#errorFullName").css("display", 'none')
    }
  }
  //validation identification :
  var identification = $("#identification").val();
  if (identification == '') {
    $("#errorIdentification").text("Please enter identification").show();
    $("#identification").focus();
    return false;
  } else {
    var patternIdentification = /^\d{13}$/
    if (!patternIdentification.test(identification)) {
      $("#errorIdentification").text("Please enter right validation.Enough 13 number").show();
      $("#identification").focus();
      return false;
    } else {
      $("#errorIdentification").css("display", 'none')
      $("#identification").css('background','#E8F0FE');
    }
  }
  //validation address
  var address = $("#address").val();
  if (address == '') {
    $("#errorAddress").text("Please enter address").show();
    $("#address").focus();
    return false;
  } else {
    var patternAddress = /^.+$/
    if (!patternAddress.test(address)) {
      $("#errorAddress").text("Please enter right validation").show();
      $("#address").focus();
      return false;
    } else {
      $("#errorAddress").css("display", 'none')
    }
  }
  //validation Phone number
  var phone = $("#phone").val();
  if (phone == '') {
    $("#errorPhone").text("Please enter Phone").show();
    $("#phone").focus();
    return false;
  } else {
    var patternPhone = /^0\d{9}$/
    if (!patternPhone.test(phone)) {
      $("#errorPhone").text("Please enter right validation. Example: start: 0 and total: 10").show();
      $("#phone").focus();
      return false;
    } else {
      $("#errorPhone").css("display", 'none')
    }
  }

  //validation Email
  var email = $("#email").val();
  if (email == '') {
    $("#errorEmail").text("Please enter email").show();
    $("#email").focus();
    return false;
  } else {
    var patternEmail = /^\w+@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,2}$/
    if (!patternEmail.test(email)) {
      $("#errorEmail").text("Please enter right validation. Example: abc@gmail.com").show();
      $("#email").focus();
      return false;
    } else {
      $("#errorEmail").css("display", 'none')
    }
  }

  //validation Password
  var password = $("#password").val();
  if (password == '') {
    $("#errorPassword").text("Please enter password").show();
    $("#password").focus();
    return false;
  } else {
    //Have at least 8 characters including 1 uppercase, 1 lowercase letter and 1 number: 
    var patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if (!patternPassword.test(password)) {
      $("#errorPassword").text("Please enter right validation. Have at least 8 characters including 1 uppercase, 1 lowercase letter and 1 number").show();
      $("#password").focus();
      return false;
    } else {
      $("#errorPassword").css("display", 'none')
      $("#password").css('background','#E8F0FE');
    }
  }

  //validation Password
  var confirmPassword = $("#confirmPassword").val();
  if (confirmPassword == '') {
    $("#errorConfirmPassword").text("Please enter confirm Password").show();
    $("#confirmPassword").focus();
    return false;
  } else {
    //Have at least 8 characters including 1 uppercase, 1 lowercase letter and 1 number: HotBoy9x
    var patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if (!patternPassword.test(confirmPassword)) {
      $("#errorConfirmPassword").text("Please enter right validation. Have at least 8 characters including 1 uppercase, 1 lowercase letter and 1 number").show();
      $("#confirmPassword").focus();
      return false;
    } else {
      if (password !== confirmPassword) {
        $("#errorConfirmPassword").text("Password does not match").show();
        $("#confirmPassword").focus();
        return false;
      }
      $("#errorConfirmPassword").css("display", 'none')
      $("#confirmPassword").css('background','#E8F0FE');
    }
  }
  console.log($('select').val());
  //gmail: /^\w+@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,2}$/
  return true;

}

