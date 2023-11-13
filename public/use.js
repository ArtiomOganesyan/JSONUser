const useButton = document.querySelector(".use_button");
const codeblock = document.getElementById("fetch_result");


useButton.addEventListener("click", () => {
  useButton.style = "background-color: red; opacity: 0.5;";
  codeblock.innerText = "Loading ...";
  codeblock.style = "height: 578px;";

  fetch("/api/users?amount=3")
    .then((response) => response.json())
    .then((json) => {
      setTimeout(() => {
        codeblock.innerText = JSON.stringify(json, null, 2);
      }, 500);
      useButton.style = "";
    })
    .catch((error) => {
      codeblock.style = "height: fit-content;";
      setTimeout(() => {
        codeblock.innerText = JSON.stringify(error.message, null, 2);
      }, 500);
    });
});
