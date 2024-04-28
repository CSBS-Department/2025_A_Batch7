const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCmh4WNjtASh7pLmLpResbEuF6omBZagf4",
    authDomain: "register-form-afa14.firebaseapp.com",
    databaseURL: "https://register-form-afa14-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "register-form-afa14",
    storageBucket: "register-form-afa14.appspot.com",
    messagingSenderId: "909800646674",
    appId: "1:909800646674:web:85da8da112af61a68b50cb"
  
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var registerformDB = firebase.database().ref("register form");
  
  document.getElementById("register form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
        var fullName = getElementById("fullName");
        var email = getElementById("email");
        var phoneNumber = getElementById("phoneNumber");
        var streetAddress = getElementById("streetAddress");
        var addressLine2 = getElementById("addressLine2");
        var country = getElementById("country");
        var city = getElementById("city");
        var postalCode = getElementById("postalCode");
  
    saveMessages(fullName,email,phoneNumber,streetAddress,addressLine2,country,city,postalCode);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("register form").reset();
  }
  
  const saveMessages = (fullName,email,phoneNumber,streetAddress,addressLine2,country,city,postalCode) => {
    var newContactForm = registerformDBDB.push();
  
    newContactForm.set({
      fullName:fullName,
      email:email,
      phoneNumber:phoneNumber,
      streetAddress:streetAddress,
      addressLine2:addressLine2,
      country:country,
      postalCode:postalCode,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };