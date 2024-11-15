// script.js

// Firebase configuration (replace with your Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyC13Xqu6TwFuXPlfgpYqaM9B30-Kbet71I",
    authDomain: "danny-s-websit.firebaseapp.com",
    projectId: "danny-s-websit",
    storageBucket: "danny-s-websit.firebasestorage.app",
    messagingSenderId: "606600741103",
    appId: "1:606600741103:web:0aedd1fc211faf355f9b1a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Toggle between login and registration forms
  function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("registerForm").classList.toggle("hidden");
  }
  
  // Register function
  async function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const message = document.getElementById("registerMessage");
  
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await user.sendEmailVerification();
      message.textContent = "Verification email sent. Please check your inbox.";
    } catch (error) {
      message.textContent = error.message;
    }
  }
  
  // Login function
  async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");
  
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        message.textContent = "Please verify your email before logging in.";
        auth.signOut();
      } else {
        message.textContent = "Login successful!";
        // Redirect or proceed to dashboard
      }
    } catch (error) {
      message.textContent = error.message;
    }
  }
  