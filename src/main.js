import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupIntl, defaultConfig } from "./lib/intl";

setupIntl(defaultConfig);
createApp(App).mount("#app");
