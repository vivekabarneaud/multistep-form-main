import {createMemo, JSX, Show} from "solid-js";
import {RouteDefinition, useLocation, useNavigate} from "@solidjs/router";
import routes from "../routes/routes";

type PrevNextButtonProps = {
    isFormValid: boolean;
}

const PrevNextButton: (props: PrevNextButtonProps) => JSX.Element = (props: PrevNextButtonProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const step = createMemo<number>(() => routes.findIndex((route: RouteDefinition) => location.pathname === route.path));

    const prev = (): void => {
        if (step() > 0) {
            const route: RouteDefinition = routes[step() - 1];
            navigate(typeof route.path === "string" ? route.path : route.path[0]);
        }
    }

    const next = (): void => {
        if (props.isFormValid) {
            const route: RouteDefinition = routes[step() + 1];
            navigate(typeof route.path === "string" ? route.path : route.path[0]);
        }
    }

    return (<div class="flex fixed md:relative justify-between items-end bottom-0 inset-x-0 py-4 pr-4 md:pr-0 md:py-0 w-full bg-white md:bg-transparent md:h-full">
            <Show when={step() > 0} fallback={<div></div>}>
                <button class="px-3 py-2 bg-transparent text-gray-400 font-semibold" onClick={() => prev()}>Go back</button>
            </Show>
            <Show when={step() < 3} fallback={<button type="submit" class="px-4 py-2 rounded bg-[#483EFE] hover:bg-[#5F56EE] text-white" onClick={() => next()}>Confirm</button>}>
                <button type="submit" class="px-3 py-2 rounded bg-[#042859] hover:bg-[#174A8B] text-white" onClick={() => next()}>Next step</button>
            </Show>
        </div>
    )
}

export default PrevNextButton;