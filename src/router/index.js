import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/projects", name: "Projects", component: Projects },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

