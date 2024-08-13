<template>
  <div>
    <h1>Login</h1>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: "Login",
  methods: {
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Logged in user:", result.user);

        // Get the ID token and store it in localStorage
        const token = await result.user.getIdToken();
        localStorage.setItem('idToken', token);

        // Redirect to the home page
        this.$router.push({ path: '/' });
      } catch (error) {
        console.error("Error during sign in:", error);
      }
    },
  },
};
</script>
