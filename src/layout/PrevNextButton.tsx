import {createMemo, JSX, Show} from "solid-js";
import {RouteDefinition, useLocation, useNavigate} from "@solidjs/router";
import routes from "../routes/routes";

type PrevNextButtonProps = {
    saveAnswers: () => boolean;
}

const PrevNextButton: (props: PrevNextButtonProps) => JSX.Element = (props: PrevNextButtonProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const step = createMemo(() => routes.findIndex((route: RouteDefinition) => location.pathname === route.path));

    const prev = (ev: Event): void => {
        ev.preventDefault();
        if (step() > 0) {
            const route: RouteDefinition = routes[step() - 1];
            navigate(typeof route.path === "string" ? route.path : route.path[0]);
        }
    }

    const next = (ev: Event): void => {
        ev.preventDefault();
        if (props.saveAnswers()) {
            const route: RouteDefinition = routes[step() + 1];
            navigate(typeof route.path === "string" ? route.path : route.path[0]);
        }
    }

    return (<div class="flex fixed md:relative justify-between items-end bottom-0 inset-x-0 py-4 pr-4 md:pr-0 md:py-0 w-full bg-white md:bg-transparent md:h-full">
            <Show when={step() > 0} fallback={<div></div>}>
                <button class="px-3 py-2 bg-transparent text-gray-400 font-semibold" onClick={(ev: Event) => prev(ev)}>Go back</button>
            </Show>
            <button type="submit" class="px-3 py-2 rounded bg-[#042859] hover:bg-[#174A8B] text-white" onClick={(ev: Event) => next(ev)}>{location.pathname.includes("summary") ? "Confirm" : "Next step"}</button>
        </div>
    )
}

export default PrevNextButton;