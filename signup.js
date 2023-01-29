function showPassword() {
  var x = document.getElementById("password");
  var y = document.getElementById("confirm-password");
  if (x.type === "password" || y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}

function validateForm() {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var address = document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  var pinCode = document.getElementById("pinCode").value;

  if (!isNaN(name) || !isNaN(lastName) || !isNaN(address) || !isNaN(state) || !isNaN(city)) {
      alert("Name, Last Name, Address, State, and City should contain only characters");
      console.log("Invalid Input: Name, Last Name, Address, State, and City should contain only characters");
      return false;
  }

  if (isNaN(phoneNumber) || phoneNumber.length != 10) {
      alert("Phone number should contain only 10 digits");
      console.log("Invalid Input: Phone number should contain only 10 digits");
      return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Email is not in proper format");
      console.log("Invalid Input: Email is not in proper format");
      return false;
  }

  if (password.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      alert("Password must contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character");
      console.log("Invalid Input: Password must contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character");
      return false;
  }

  if (password != confirmPassword) {
      alert("Confirm password does not match with password");
      console.log("Invalid Input: Confirm password does not match with password");
      return false;
  }

  if (isNaN(pinCode) || pinCode.length != 6) {
      alert("Pin code should contain only 6 digits");
      console.log("Invalid Input: Pin code should contain only 6 digits");
      return false;
  }

  alert("Form submitted successfully");
  console.log("Form submitted successfully");
  return true;
}

      
    