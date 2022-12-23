import {RouteDefinition} from "@solidjs/router";
import {lazy} from "solid-js";

const routes: RouteDefinition[] = [
    {
        path: "/your-info",
        component: lazy(() => import("./pages/YourInfo"))
    },
    {
        path: "/select-plan",
        component: lazy(() => import("./pages/SelectPlan"))
    },
    {
        path: "/addons",
        component: lazy(() => import("./pages/AddOns"))
    },
    {
        path: "/summary",
        component: lazy(() => import("./pages/Summary"))
    },
];

export default routes;