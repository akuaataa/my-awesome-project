function tryMatcha() {
  let name = prompt("What is your first name");
  alert(
    "Hi, " +
      name +
      ", we will be in touch. Meanwhile, enjoy a cup of any other tea!"
  );
}
let tryM = document.querySelector("button");

tryM.addEventListener("click", tryMatcha);
