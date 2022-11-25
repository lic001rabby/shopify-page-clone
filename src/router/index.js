import Vue from "vue";
import VueRouter from "vue-router";
import ProductView from "../views/ProductView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
