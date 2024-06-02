import Vue from "vue";
import Router from "vue-router";
import OverOnsWeb from "./views/OverOnsWeb.vue";
import ContactWeb from "./views/ContactWeb.vue";
import PortalWeb from "./views/PortalWeb.vue";
import PortalLoginWeb from "./views/PortalLoginWeb.vue";
import OverviewWeb from "./views/OverviewWeb.vue";
import { overOnsWebData, contactWebData, portalWebData, portalLoginWebData, overviewWebData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/overonsweb",
      component: OverOnsWeb,
      props: { ...overOnsWebData },
    },
    {
      path: "/portalweb",
      component: PortalWeb,
      props: { ...portalWebData },
    },
    {
      path: "/portalloginweb",
      component: PortalLoginWeb,
      props: { ...portalLoginWebData },
    },
    {
      path: "/overviewweb",
      component: OverviewWeb,
      props: { ...overviewWebData },
    },
    {
      path: "/contactweb",
      component: ContactWeb,
      props: { ...contactWebData },
    },
    {
      path: "*",
      component: OverviewWeb,
      props: { ...overviewWebData },
    },
  ],
});


