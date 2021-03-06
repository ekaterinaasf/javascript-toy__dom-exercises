// Your JavaScript goes here.
window.addEventListener("load", function() {
  debugger;
  // Here is some pseudo-code to help you get started:
  let state = 0; //initial state is none display
  // 1. Get the DOM element which will be clicked.
  const domEl = document.getElementById("button");
  // 2. Add a listener for the 'click' event onto that element.
  domEl.addEventListener("click", function() {
    // 3. The block for the listener should get the DOM
    //    element containing the text to reveal.
    const textEl = document.getElementsByClassName("toggle_me");
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    if (state === 0) {
      for (var i = 0; i < textEl.length; i++) {
        textEl[i].style.display = "block";
      }
      state = 1;
    } else {
      for (var i = 0; i < textEl.length; i++) {
        textEl[i].style.display = "none";
      }
      state = 0;
    }
  });
});
