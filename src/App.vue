<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import "./style.css"


export default {
  name: 'App',
  data() {
    return {
      user: null
    }
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  }
}
</script>
