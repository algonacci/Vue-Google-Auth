import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Users from "./components/Users.vue";
import Home from "./components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to protect routes that require authentication
// router.beforeEach(async (to, from, next) => {
//   const currentUser = await new Promise((resolve) => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       unsubscribe();
//       resolve(user);
//     });
//   });

//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
