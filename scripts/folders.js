var folderOne = document.getElementById('folder-one');
var folderTwo = document.getElementById('folder-two');
var folderThree = document.getElementById('folder-three');
var folderEtc = document.getElementById('folder-etc');

folderOne.innerHTML = "📁";
folderTwo.innerHTML = "📁";
folderThree.innerHTML = "📁";
folderEtc.innerHTML = "📁";

folderOne.addEventListener('click', function() {
  folderOne.innerHTML === "📁" ?
    folderOne.innerHTML = "📂" :
    folderOne.innerHTML = "📁";
});
folderTwo.addEventListener('click', function() {
  folderTwo.innerHTML === "📁" ?
    folderTwo.innerHTML = "📂" :
    folderTwo.innerHTML = "📁";
});
folderThree.addEventListener('click', function() {
  folderThree.innerHTML === "📁" ?
    folderThree.innerHTML = "📂" :
    folderThree.innerHTML = "📁";
});
folderEtc.addEventListener('click', function() {
  folderEtc.innerHTML === "📁" ?
    folderEtc.innerHTML = "📂" :
    folderEtc.innerHTML = "📁";
});

folderOne.addEventListener('touchstart', function(evt) {
  evt.preventDefault();
  folderOne.innerHTML === "📁" ?
    folderOne.innerHTML = "📂" :
    folderOne.innerHTML = "📁";
});
folderTwo.addEventListener('touchstart', function(evt) {
  evt.preventDefault();
  folderTwo.innerHTML === "📁" ?
    folderTwo.innerHTML = "📂" :
    folderTwo.innerHTML = "📁";
});
folderThree.addEventListener('touchstart', function(evt) {
  evt.preventDefault();
  folderThree.innerHTML === "📁" ?
    folderThree.innerHTML = "📂" :
    folderThree.innerHTML = "📁";
});
folderEtc.addEventListener('touchstart', function(evt) {
  evt.preventDefault();
  folderEtc.innerHTML === "📁" ?
    folderEtc.innerHTML = "📂" :
    folderEtc.innerHTML = "📁";
});