window.addEventListener("load", function() {
  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  const domEl = document.getElementById("button");
  // 2. Add a listener for the 'click' event onto that element.
  domEl.addEventListener("click", function() {
    // 3. The block for the listener should get the DOM
    //    element containing the text to appear.
    const textEl = document.getElementsByClassName("hide_me");
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    textEl[0].style.display = "none";
    textEl[1].style.display = "none";
    // 5. Also modify the DOM to hide the "More info..." link.
  });
});

// Is it suitable to write function inside a function??
