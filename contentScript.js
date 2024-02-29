try {
  const textarea = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.input-row > cib-text-input").shadowRoot.querySelector("#searchbox");
  if (textarea) {
    textarea.setAttribute('maxlength', '40000');
  }
} catch (error) {
  console.error("Could not update textarea maxlength:", error);
}

try {
  // Search for the div with the class 'letter-counter'
  const letterCounterDiv = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter");
  const spanElement = letterCounterDiv.querySelector("span");
  if (letterCounterDiv && spanElement.nextSibling.nodeType === Node.TEXT_NODE) {
    spanElement.nextSibling.nextSibling.textContent = '40000';
  }
} catch (error) {
  console.error("Could not update the letter counter:", error);
}