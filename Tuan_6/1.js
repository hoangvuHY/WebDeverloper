var select = null;
var displayContent = (isShelf) => {
  select = isShelf;
  console.log(isShelf);
  document.getElementById('content').innerHTML = select.innerHTML;
}
var onMouseOvers = (isShelf) => {
  if (select != isShelf) {
    isShelf.className = 'feature';
  }
}