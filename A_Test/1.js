/* var list = document.querySelector('#a');
var item = document.querySelectorAll('#a li');
var last = item[item.length - 1];
//gán last là li 5
for (let i = item.length - 2; i >= 0; i--) { 
  //item[i] là li 4
  list.removeChild(item[i]); // Xóa thằng Li 4
  list.insertBefore(item[i], last.nextSibling //Cái này là bằng null và sau li 5
    
    );// Thêm li 4 vào sau li 5
  last = item[i];// gán last bằng li 4
  //lúc này last lại ở dưới cùng
} */
/* var list = document.querySelector('#a');
var items = document.querySelectorAll('#a li'); */

/* for (let i = 0; i < item.length; i++) {
  list.removeChild(item[i]);
  list.insertBefore(item[i], item[i + 2]);
} */
/* for (let i = items.length - 2; i >= 0; i--) {
  list.removeChild(items[i]);
  list.appendChild(items[i]);
} */


/* function a(x, y) {
  function b(x, y) {
    return x + y;
  }
  this.c = function (x, y) {
    return x + y;
  }
}
var o = new a(1, 2);
console.log(o); */
/* function t(o) {
  for (;  o.next ; o=o.next) {
      return o;
  }
} */

/* var temp;
for (let i = 0; i < items.length / 2; i++) {
  temp = items[i];
  items[i] = items[items.length - i - 1];
  items[items.length - i - 1] = temp;
} */
/* function a() {
  function b() {
    console.log('ab');
  }
} */
/* function W(c) {
  var x = c;
  this.get = function () {
    return x;
  }
}

function P(c, d) {
  W.call(this, c);
  var date = d;
  this.to = function () {
    return this.get() + ',' + date;
  }
}
var p = new P('dsds', new Date())
console.log(p.to()); */
function a() {
  function b(x, y) {
    return x + y;
  }
  this.c = function (x, y) {
    return x+y;
    // return b.apply(this,[a,b]);
  } 
 
} 
var o = new a();
console.log(o.c(1, 2));
console.log(o.c(3, 4));