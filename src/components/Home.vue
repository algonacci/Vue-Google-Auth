<template>
    <div>
        <h1>Welcome to the App</h1>
        <div v-if="user">
            <p>Welcome, {{ user.displayName }}!</p>
            <p>Email: {{ user.email }}</p>
            <button @click="signOut">Sign Out</button>
        </div>
        <div v-else>
            <p><router-link to="/login">Go to Login</router-link></p>
        </div>
        <p v-if="user"><router-link to="/users">View Users</router-link></p>
    </div>
</template>

<script>
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default {
    name: "Home",
    data() {
        return {
            user: null
        };
    },
    created() {
        // Listen to the auth state changes to get the current user
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;  // Set the user data
            } else {
                this.user = null;  // No user is signed in
            }
        });
    },
    methods: {
        async signOut() {
            try {
                await signOut(auth);
                this.user = null;  // Clear the user data after signing out
                console.log("User signed out");
            } catch (error) {
                console.error("Error signing out:", error);
            }
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

p {
    margin: 10px 0;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #0056b3;
}
</style>