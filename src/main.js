import "./assets/style.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

const changeTheme = (themes) => {
    const randomIndex = Math.floor(Math.random() * themes.length);
    const randomTheme = themes[randomIndex];
    document.querySelector("html").setAttribute("data-theme", randomTheme);
};

changeTheme(["rose", "coffee", "blueberry", "nature", "iron", "gold"])

const app = createApp(App)

app.use(router)

app.mount("#app")
