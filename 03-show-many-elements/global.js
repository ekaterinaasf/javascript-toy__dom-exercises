window.addEventListener("load", function() {
  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  const domEl = document.getElementById("button");
  // 2. Add a listener for the 'click' event onto that element.
  domEl.addEventListener("click", function() {
    // 3. The block for the listener should get the DOM
    //    element containing the text to reveal.
    const textEl = document.getElementsByClassName("hide_me");
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    for (let i = 0; i < textEl.length; i++) {
      textEl[i].style.display = "inline";
    }
    textEl.style.display = "inline";
    // 5. Also modify the DOM to hide the "More info..." link.
    domEl.style.display = "none";
  });
});

// Is it suitable to write function inside a function??
