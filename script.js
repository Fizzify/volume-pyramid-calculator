const title = document.querySelector(".hero-title");

title.addEventListener("click", () => {
  const input1 = prompt("What is the base length of the pyramid?");
  const input2 = prompt("What is the base width of the pyramid?");
  const input3 = prompt("What is the pyramid's height?");
  const result = (input1 * input2 * input3) / 3;
  title.textContent = "The pyramid's volume is " + result + " 🎉";
});
