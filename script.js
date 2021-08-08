var modal = document.getElementById("form");
var btn = document.getElementById("form__open-btn");
var span = document.getElementsByClassName("close")[0];
const form = document.querySelector("#form");



btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (document.getElementById("name").value.trim() =='' ) {
    const v = document.getElementById("name").parentElement;
    v.classList.add("error");
    const small = document.getElementById("name").nextElementSibling;
    small.innerHTML="Field required";
  }
  else{
    const v = document.getElementById("name").parentElement;
    v.classList.remove("error");
  }
  if (document.getElementById("phone").value.trim()=='') {
    const v = document.getElementById("phone").parentElement;
    v.classList.add("error");
    const small = document.getElementById("phone").nextElementSibling;
    small.innerHTML="Field required";
  }
  else{
    const v = document.getElementById("phone").parentElement;
    v.classList.remove("error");
  }
  if (document.getElementById("email").value.trim()=='') {
    const v = document.getElementById("email").parentElement;
    v.classList.add("error");
    const small = document.getElementById("email").nextElementSibling;
    small.innerHTML="Field required";
  }
  else{
    const v = document.getElementById("email").parentElement;
    v.classList.remove("error");
  }


form.addEventListener("submit", (e) => {
  e.preventDefault()
  limitText (task)
})

function limitText(task) {
	if (task.value.length > 400) {
		task.value = task.value.substring(0, 400);
    console.log (task.value)
    const formControl = task.parentElement 
    formControl.classList.add ("error")
    const small = document.getElementById("task").nextElementSibling;
    small.innerHTML="Text Should Be less Than 400 Characters";
  }
}
