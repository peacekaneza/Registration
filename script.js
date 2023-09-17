const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const stdid = document.getElementById("id");
const first = document.getElementById("fname");
const last = document.getElementById("lname");
const phone = document.getElementById("phone");
const bdate = document.getElementById("birthdate");
const faculty = document.getElementById("faculty");
const dept = document.getElementById("department");

const email1 = document.getElementById("email1");
const email2 = document.getElementById("email2");
const email3 = document.getElementById("email3");

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInput = () => {
  const stidValue = stdid.value.trim();
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const email1Value = email1.value.trim();
  const phoneValue = phone.value.trim();
  const bdateValue = bdate.value.trim();
  const facultyValue = faculty.value.trim();
  const deptValue = dept.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  const today = new Date();
  const dates = new Date(bdateValue);

  if (stidValue === "") {
    setError(stdid, "Student ID is required");
    return;
  } else if (stidValue.length !== 5) {
    setError(stdid, "Invalid Student Id");
    return;
  } else {
    setSuccess(stdid);
  }
  if (firstValue == "") {
    setError(first, "First Name is required");
    return;
  } else {
    setSuccess(first);
  }
  if (lastValue === "") {
    setError(last, "Last name is required");
    return;
  } else {
    setSuccess(last);
  }
  if (email1Value === "") {
    setError(email1, "Email is required");
    return;
  } else if (!isValidEmail(email1Value)) {
    setError(email1, "please enter a valid email");
    return;
  } else {
    setSuccess(email1);
  }
  if (phoneValue === "" && phone.length !== 10) {
    setError(phone, "enter a valid phone number");
    return;
  } else {
    setSuccess(phone);
  }
  if (bdateValue === "") {
    setError(bdate, "Birth Date is required");
    return;
  } else if (dates > today) {
    setError(bdate, "Date of Birth can't be in future");
    return;
  } else {
    setSuccess(bdate);
  }
  if (facultyValue === "") {
    setError(faculty, "faculty is required");
    return;
  } else {
    setSuccess(faculty);
  }
  if (deptValue === "") {
    setError(dept, "department is required");
    return;
  } else {
    setSuccess(dept);
  }
  if (password1Value === "") {
    setError(password1, "provide a password");
    return;
  } else if (password1Value.length < 8) {
    setError(password1, "password value must be 8");
    return;
  } else {
    setSuccess(password1);
  }
  if (password2Value === "") {
    setError(password2, "confirm your password");
    return;
  } else if (password2Value !== password1Value) {
    setError(password2, "password Does not match");
    return;
  } else {
    setSuccess(password2);
  }
  window.location.href = "login.html";
};

const logInValidation = () => {
  const email2Value = email2.value.trim();
  const password3Value = password3.value.trim();

  if (email2Value === "") {
    setError(email2, "Email is required");
    return;
  } else if (!isValidEmail(email2Value)) {
    setError(email2, "please enter a valid email");
    return;
  } else {
    setSuccess(email2);
  }
  if (password3Value === "") {
    setError(password3, "provide a password");
    return;
  } else if (password3Value.length < 8) {
    setError(password3, "password value must be 8");
    return;
  } else {
    setSuccess(password3);
  }
  window.location.href = "welcome.html";
};
const recoveryValidate = () => {
  const email3Value = email3.value.trim();
  if (email3Value === "") {
    setError(email3, "enter an email");
    return;
  } else if (!isValidEmail(email3Value)) {
    setError(email3, "Invalid Email");
    return;
  } else {
    setSuccess(email3);
  }
  window.location.href = "welcome.html";
};

if (form1) {
  form1.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
  });
}
if (form2) {
  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    logInValidation();
  });
}
if (form3) {
  form3.addEventListener("submit", (e) => {
    e.preventDefault();
    recoveryValidate();
  });
}
