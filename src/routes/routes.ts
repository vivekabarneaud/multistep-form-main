import {RouteDefinition} from "@solidjs/router";
import {lazy} from "solid-js";

const routes: RouteDefinition[] = [
    {
        path: "/your-info",
        component: lazy(() => import("./routes/YourInfo"))
    },
    {
        path: "/select-plan",
        component: lazy(() => import("./routes/SelectPlan"))
    },
    {
        path: "/addons",
        component: lazy(() => import("./routes/AddOns"))
    },
    {
        path: "/summary",
        component: lazy(() => import("./routes/Summary"))
    },
];

export default routes;