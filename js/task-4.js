const formRegistor = document.querySelector(".login-form");
const btn = document.querySelector('button');
formRegistor.addEventListener("submit", resultSubmit);
function resultSubmit(elem) {
  elem.preventDefault();
  const { email, password } = elem.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);
  formRegistor.reset();
}
btn.classList.add('btn-form')