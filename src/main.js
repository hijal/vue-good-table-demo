import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "vue-good-table-next/dist/vue-good-table-next.css";
import VueGoodTablePlugin from "vue-good-table-next";

import App from "./App.vue";

const app = createApp(App);
app.use(VueGoodTablePlugin);

app.mount("#app");
