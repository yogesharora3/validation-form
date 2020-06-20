//dom
const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".confirm-password");
function showError(input, message) {
  // console.log(input.classList);
  input.classList.add("alert");
  input.parentElement.children[2].classList.add("active");
  input.parentElement.children[2].innerText = message;
  input.classList.remove("success");
}
function showSucces(input) {
  input.parentElement.children[2].classList.remove("active");
  input.classList.remove("alert");
  input.classList.add("success");
}
function checklength(input, min) {
  if (input.value.length < min) {
    showError(input, `can not be less than ${min}`);
  } else {
    showSucces(input);
  }
}
const handleKey = (e) => {
  // console.log(e.target);
  if (e.target.value.trim() === "") {
    e.target.parentElement.children[0].classList.remove("active");
  } else {
    e.target.parentElement.children[0].classList.add("active");
  }
};
const handleUsername = (target) => {
  // console.log(target);
  if (target.value.trim() === "") {
    showError(target, `${target.id} can not be empty`);
    return false;
  } else {
    checklength(target, 3);
    return true;
  }
};
const handleEmail = (target) => {
  if (target.value.trim() === "") {
    showError(target, `${target.id} can not be empty`);
    return false;
  } else {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(target.value)) {
      showSucces(target);
      return true;
    } else {
      showError(target, "email is not valid");
      return false;
    }
  }
};
const handlePassword = (target) => {
  const p = target.value;
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (p === "") {
    showError(target, "please enter the password");
    return false;
  } else {
    if (p.length < 6 || p.length > 16) {
      showError(target, "password must   be between 6 and 16");
      return false;
    } else if (regularExpression.test(p)) {
      showSucces(target);
      return true;
    } else {
      showError(
        target,
        "password must contain atleast one number and one special character"
      );
      return false;
    }
  }
};
const handleConfirm = (target) => {
  const p = target.value;
  if (p === "") {
    showError(target, "please enter the password");
    return false;
  } else {
    // console.log()
    if (p !== password.value) {
      showError(target, "password didn't match");
      return false;
    } else {
      showSucces(target);
      return true;
    }
  }
};
username.addEventListener("blur", (e) => {
  handleUsername(e.target);
});
username.addEventListener("keyup", handleKey);
email.addEventListener("keyup", handleKey);
email.addEventListener("blur", (e) => {
  handleEmail(e.target);
});
password.addEventListener("keyup", handleKey);
password.addEventListener("blur", (e) => {
  handlePassword(e.target);
});
password2.addEventListener("keyup", handleKey);
password2.addEventListener("blur", (e) => {
  handleConfirm(e.target);
});
form.addEventListener("submit", (e) => {
  console.log(e.target);
  if (handleUsername(username)) {
    console.log("h1");
    if (handleEmail(email)) {
      console.log("h2");
      if (handlePassword(password)) {
        console.log("h3");
        if (handleConfirm(password2)) {
          console.log("h4");
          return true;
        }
      }
    }
  }
  e.preventDefault();
});
