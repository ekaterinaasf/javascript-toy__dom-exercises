// Your JavaScript goes here.
window.addEventListener("load", function() {
  debugger;
  const domEl = document.getElementById("toggle_button");
  domEl.addEventListener("click", function() {
    const textEl = document.querySelectorAll("ul.second_five li");
    for (var i = 0; i < textEl.length; i++) {
      if (textEl[i].style.display == "none") {
        textEl[i].style.display = "list-item";
      } else {
        textEl[i].style.display = "none";
      }
    }
  });
});
