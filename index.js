const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("main-container");

signUpButton.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});
