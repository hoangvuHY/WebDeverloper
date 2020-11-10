function validationForm() {
  //validation name
  var fullName = $("#fullName").val();
  if (fullName == '') { 
    $("#errorFullName").text("Please enter full name").show();
    return false;
  } else {
    var patternFullName = /^[a-zA-Z ]$/
    if (!patternFullName.test(fullName)) {
      $("#errorFullName").css('color','red')
      $("#errorFullName").text("Please enter right validation").show();
      return false;
    }
  }
  //validation identification
  var fullName = $("#fullName").val();
  if (fullName == '') {
    $("#errorFullName").text("Please enter full name").show();
    return false;
  } else {
    var patternFullName = /^\d+$/
    if (!patternFullName.test(fullName)) {
      $("#errorFullName").css('color','red')
      $("#errorFullName").text("Please enter right validation").show();
      return false;
    }
  }
  return true;
}