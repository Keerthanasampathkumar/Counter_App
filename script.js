const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxLength = textarea.maxLength;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  counter.textContent = `Characters: ${currentLength} / ${maxLength}`;

  if (currentLength > maxLength) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
});
