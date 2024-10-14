// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBZf3d9tuf2PzRutqGoFQJH98YO-WicCMQ",
  authDomain: "foodie-c3459.firebaseapp.com",
  projectId: "foodie-c3459",
  storageBucket: "foodie-c3459.appspot.com",
  messagingSenderId: "1096613564603",
  appId: "1:1096613564603:web:d616be4284d41943d4199e",
};

const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 2000);
}

const signupbtn = document.getElementById("login--login-form-signUpbtn");
signupbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const email = document.getElementById("useremail").value;
  const password = document.getElementById("userpassword").value;
  console.log("click");

  const auth = getAuth();
  const db = getFirestore();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        username: name,
      };
      // alert("registration successful");
      showMessage("Account created", "signUpMessage");
      setTimeout(function () {
        cont.classList.remove("hidden");
        logincont.classList.add("hidden");
      }, 3000);

      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.log("error");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/email-already-in-use")
        showMessage("Already a user", "SignUpMessage");
      else showMessage("unable to create user", "SignUpMessage");
      const errorMessage = error.message;
      // alert(errorMessage);
    });
});
const signInBtn = document.getElementById(login--login-form-signInbtn);
signInBtn.addEventListener("click",function(){
    e.preventDefault();
     const email = document.getElementById("userSignemail").value;
     const password = document.getElementById("userSignpassword").value;
const auth = getAuth();
signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
    showMessage('login is successful','signInMessage');
    const user=userCredential.user;
    localStorage.setItem('loggedInUserId',user.uid);
    window.location.href='index.html';
}).catch((error)=>{
    const errorCode=error.code;
    if(errorCode=='auth/invalid-credential')showMessage('Incorrect Email and password','sigInInMessage');
    else showMessage('Email and password not exit','sigInInMessage');
})
})