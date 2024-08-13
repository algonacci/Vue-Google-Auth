import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { auth } from "./firebase";

const app = createApp(App);

app.config.globalProperties.$auth = auth;

app.use(router).mount("#app");
