function togglePassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }
  
  function validateForm() {
  var userid = document.getElementById("userid").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var password = document.getElementById("password").value;
  var useridRegex = /^.{8,12}$/;
  var phonenumberRegex = /^\d{10}$/;
  var passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  
  if (!useridRegex.test(userid)) {
  alert("Invalid User ID, Please enter 8 to 12 characters");
  console.log("User ID validation failed");
  return false;
  } else if (!phonenumberRegex.test(phonenumber)) {
  alert("Invalid Phone Number, Please enter 10 digits only");
  console.log("Phone Number validation failed");
  return false;
  } else if (!passwordRegex.test(password)) {
  alert("Invalid Password, Please enter 8 or more characters with at least 1 capital letter, 1 unique character and small letters");
  console.log("Password validation failed");
  return false;
  } else {
  location.href = 'signup.html';
  console.log("Form validation succeeded, redirecting to signup page");
  return true;
  }
  }
  
  
  
  
