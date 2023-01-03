import {Component, For} from "solid-js";
import routes from "../routes/routes";
import NavbarButton from "./NavbarButton";

const NavbarDesktop: Component = () => {
    const routesToShow = routes.slice(1, routes.length - 1);

    return (
        <div class="flex flex-col absolute top-0 left-0 pl-6 pt-7">
            <For each={routesToShow}>
                {
                    (route, index) => <NavbarButton route={typeof route.path === "string" ? route.path : route.path[0]} step={index() + 1} />
                }
            </For>

        </div>
    )
}

export default NavbarDesktop;