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


const admin = require('firebase-admin');
const twilio = require('twilio');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Path to your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://register-form-afa14-default-rtdb.asia-southeast1.firebasedatabase.app'
});

// Initialize Twilio client
const accountSid = 'AC5a789deb0195b58f38b669a8479c0281';
const authToken = 'fed4fad590e6e9f604800fdced58e3f9';
const twilioClient = twilio(accountSid, authToken);

// Function to send SMS
function sendSMS(phoneNumber, message) {
  twilioClient.messages.create({
    body: message,
    from: '+12513206057',
    to: phoneNumber
  })
  .then(message => console.log('Message sent successfully:', message.sid))
  .catch(error => console.error('Error sending message:', error));
}

// Function to retrieve user's phone number from Firestore and send SMS
function processRegistration(userId) {
  admin.firestore().collection('users').doc(userId).get()
    .then(doc => {
      if (doc.exists) {
        const userData = doc.data();
        const phoneNumber = userData.phoneNumber;
        const message = 'Hello! Thank you for registering.';
        sendSMS(phoneNumber, message);
      } else {
        console.error('User document not found');
      }
    })
    .catch(error => console.error('Error retrieving user data:', error));
}

// Example usage
const userId = 'user_id_of_registered_user';
processRegistration(userId);
