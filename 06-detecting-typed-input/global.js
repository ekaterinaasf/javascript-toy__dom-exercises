// Your JavaScript goes here.
// Your JavaScript goes here.
window.addEventListener("load", function() {
  debugger;
  const domEl = document.getElementById("full_name");
  domEl.addEventListener("keyup", function() {
    const textEl = document.getElementById("greeting");
    textEl.innerHTML = domEl.value;
  });
});
