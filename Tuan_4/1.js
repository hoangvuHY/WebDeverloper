document.getElementById('name').focus();
document.getElementById('name').onblur = function () {
  this.value = standardization(this.value);
}

document.getElementById('name').onkeyup = function (e) {
  enter(e, this, 'address');
}

document.getElementById('address').onkeyup = function (e) {
  enter(e, this, 'birth');
}
document.getElementById('birth').onkeyup = function (e) {
  enter(e, this, 'email');
}

document.getElementById('email').onkeyup = function (e) {
  enter(e, this, 'phone');
}
document.getElementById('phone').onkeyup = function (e) {
  enter(e, this, 'user');
}

document.getElementById('user').onkeyup = function (e) {
  enter(e, this, 'password');
}
document.getElementById('password').onkeyup = function (e) {
  enter(e, this, 'passwordAgain');
}
document.getElementById('passwordAgain').onkeyup = function (e) {
  enter(e, this, 'note');
}
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault()
});
function checkSubmit() {
  console.log('abc');
  var check = true;
  /* 
   document.getElementById("errorFullName").innerHTML = "";
   document.getElementById("errorBirth").innerHTML = "";
   document.getElementById("errorFullName").innerHTML = "";
   document.getElementById("email").innerHTML = "";
  */
  //focus ten

  //focus and check birth
  if (document.getElementById("birth").value == "") {
    document.getElementById("errorBirth").innerHTML = "Quý vị chưa nhập ngày sinh";
    document.getElementById("birth").focus();
    check = false;
  } else if (!checkDate(document.getElementById("birth").value)) {
    document.getElementById("errorBirth").innerHTML = "Ngày sinh không đúng định dạng";
    document.getElementById("birth").focus();
    check = false;
  }

  //check and focus email
  if (document.getElementById("email").value == "") {
    document.getElementById("errorEmail").innerHTML = "Quý vị chưa nhập e-mail";
    document.getElementById("email").focus();
    check = false;
  }
  else if (!checkEmail(document.getElementById("email").value)) {
    document.getElementById("errorEmail").innerHTML = "Quý vị chưa nhập e-mail";
    document.getElementById("email").focus();
    check = false;
  }
  //check and focus user
  if (document.getElementById("user").value == "") {
    document.getElementById("errorUser").innerHTML = "Quý vị chưa nhập tên sử dụng";
    document.getElementById("user").focus();
    check = false;
  }
  else if (document.getElementById("user").value) {
    document.getElementById("errorUser").innerHTML = "Tên sử dụng không đúng định dạng";
    document.getElementById("user").focus();
    check = false;
  }
  //check and focus password
  if (document.getElementById("password").value == "") {
    document.getElementById("errorPassword").innerHTML = "Quý vị chưa nhập mật khẩu";
    document.getElementById("password").focus();
    check = false;
  } else if (document.getElementById("passwordAgain").value == "") {
    document.getElementById("errorPasswordAgain").innerHTML = "Quý vị chưa gõ lại mật khẩu";
    document.getElementById("passwordAgain").focus();
    check = false;
  }
  else if (document.getElementById("password").value != document.getElementById("passwordAgain").value) {
    document.getElementById("errorUser").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
    document.getElementById("password").focus();
    check = false;
  }
  if (document.getElementById("name").value == "") {
    document.getElementById("errorFullName").innerHTML = "Quý khách chưa nhập họ tên";
    document.getElementById("name").focus();
    check = false;
  }
  if (check) document.getElementById("form1").submit();
}


function enter(e, focus, nextInput) {
  if (window.event) {
    e = window.event;
  } if (e.keyCode == 13) {
    document.getElementById(nextInput).focus();
  }
}

function checkDate(date) {
  arrayDate = date.split('/');
  if (arrayDate.length !== 3) return false;
  if (isNaN(arrayDate[0]) || isNaN(arrayDate[1]) || isNaN(arrayDate[2])) return false;
  var day = parseInt(arrayDate[0]);
  var month = parseInt(arrayDate[1]);
  var year = parseInt(arrayDate[2]);
  if (month > 12 || month < 1) {
    return false;
  }
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8
    || month === 10 || month === 12) {
    if (day > 31) {
      return false;
    }
  } else if (month === 2) {
    if (year % 4 === 0 && month % 100 === 0) {

      if (day > 29) {
        return false;
      }

    } else if (day > 28) return false;
  } else if (day > 30 || day < 1) return false;

  dateCur = new Date();
  if (year > dateCur.getFullYear() || year < 1930) return false;
  return true;

}

function checkEmail() {
  return true;
}

function standardization(name) {
  var arrayFullName = name.split(' ');
  var standard = "";
  for (let i = 0; i < arrayFullName.length; i++) {
    if (arrayFullName[i].length > 0) {
      if (standard.length > 0) {
        standard = standard + " ";
      }
      standard = standard + arrayFullName[i].substring(0, 1).toUpperCase();
      standard = standard + arrayFullName[i].substring(1).toLowerCase();
    }
  }
  return standard;
}
