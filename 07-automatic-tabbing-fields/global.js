// Your JavaScript goes here.
window.addEventListener("load", function() {
  var text1 = document.getElementById("first");
  var text2 = document.getElementById("second");
  var text3 = document.getElementById("third");

  text1.addEventListener("keyup", function() {
    if (text1.value.length == 3) {
      text2.focus();
      text2.addEventListener("keyup", function() {
        if (text2.value.length === 3) {
          text3.focus();
        }
      });
    }
  });
});
