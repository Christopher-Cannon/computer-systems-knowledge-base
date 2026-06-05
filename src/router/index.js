import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import ItemBrowser from "../pages/ItemBrowser.vue";
import Item from "../pages/Item.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/", name: "Home", component: Home, hash: "#top" },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/item-browser", name: "Item Browser", component: ItemBrowser },
    { path: "/item-browser/:id", name: "Item", component: Item, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth", // optional: for smooth scrolling
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
