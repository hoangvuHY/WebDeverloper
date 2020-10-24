var check = document.getElementsByName("check");

var alls = (isShelf) => {
  var inputChecked = isShelf.children[0].children[0];
  var count = 0;
  if (inputChecked.checked == false) {
    inputChecked.checked = true;
    inputChecked.parentNode.parentNode.classList.add('yellows');

    for (; count < check.length; count++) {
      if (!check[count].checked) break;
    }
    // console.log(count);
    if (count === check.length) document.getElementById('checkAll').checked = true;
    else document.getElementById('checkAll').checked = false;
    document.querySelector('button.delete').classList.remove('nodisplay');

  } else {
    inputChecked.checked = false;
    inputChecked.parentNode.parentNode.classList.remove('yellows');
    document.getElementById('checkAll').checked = false;

    var flagCheck = document.getElementsByName("check");
    // var x = flagCheck.length - 1;
    // console.log(check.length);/

    for (count = check.length - 1; count >= 0; --count) {
      if (check[count].checked) break;
    }
    // count++;
    // console.log(count);
    if (count == -1) { // count == 0 
      document.querySelector('button.delete').classList.add('nodisplay');
    }
    else {
      document.querySelector('button.delete').classList.remove('nodisplay');
    }
  }
}
/* 
function checkOne() {
  
  /**
   * Nếu có cái này thì cái bấm vào tr k dùng được và ngược lại
   Khi người dùng đánh dấu một hộp kiểm nào đó thì dòng chứa hộp kiểm được tô vàng (như dòng thứ   ba trong hình). Nếu người dùng bỏ đánh dấu hợp kiểm thì trả lại màu ban đầu cho dòng chứa hộp kiểm.
   */
for (let i = 0; i < check.length; i++) {
  check[i].onchange = function () {
    if (this.checked) {
      this.parentNode.parentNode.classList.add('yellows');
      var j = 0;
      var flagCheck = document.getElementsByName("check");
      for (; j < flagCheck.length; j++) {
        if (!flagCheck[j].checked) break;
      }
      if (j == flagCheck.length) document.getElementById('checkAll').checked = true;
      else document.getElementById('checkAll').checked = false;
      document.querySelector('button.delete').classList.remove('nodisplay');
      //  if(j =)
    } else {
      this.parentNode.parentNode.classList.remove('yellows');
      document.getElementById('checkAll').checked = false;
      var j = 0;
      var flagCheck = document.getElementsByName("check");
      for (; j < flagCheck.length; j++) {
        if (flagCheck[j].checked) break;
      }
      if (j == flagCheck.length) {
        document.querySelector('button.delete').classList.add('nodisplay');
      } else {
        document.querySelector('button.delete').classList.remove('nodisplay');
      }
    }
  }
}

// 

function onCheckAll() {
  var checkedInput = document.querySelectorAll('.checked');
  if (document.querySelector('thead tr input').checked) {
    for (let index = 0; index < checkedInput.length; index++) {
      checkedInput[index].checked = true;
      checkedInput[index].parentNode.parentNode.classList.add('yellows');
      document.querySelector("button.delete").classList.remove("nodisplay");
    }
  } else {
    for (let index = 0; index < checkedInput.length; index++) {
      checkedInput[index].checked = false;
      checkedInput[index].parentNode.parentNode.classList.remove('yellows');
      document.querySelector("button.delete").classList.add("nodisplay");
    }
  }
}

function deletes() {
  for (i = check.length - 1; i >= 0; i--) {
    if (check[i].checked) {
      check[i].parentNode.parentNode.parentNode.removeChild(check[i].parentNode.parentNode)
    }
  }
}