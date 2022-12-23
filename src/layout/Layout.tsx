import { A } from "@solidjs/router";
import {createSignal, For, ParentComponent, Show} from "solid-js";
import NavbarDesktop from "./NavbarDesktop";
import routes from "../routes/routes";
import NavbarButton from "./NavbarButton";

const Layout: ParentComponent = (props) => {
    const [screenW, setScreenW] = createSignal<number>(window.innerWidth);

    window.addEventListener('resize', () => {
        setScreenW(window.innerWidth);
    });

    return (<>
        <Show when={screenW() > 576} fallback={
            <div class="flex flex-col w-full min-h-screen pt-12 gap-y-6">
                <div class="flex px-24 justify-between items-center w-full">
                    <For each={routes}>
                        {
                            (route, index) => <NavbarButton route={typeof route.path === "string" ? route.path : route.path[0]} step={index() + 1} />
                        }
                    </For>
                </div>

                <div class="flex flex-col rounded-lg bg-white shadow-lg pt-20 px-10 w-[90%] min-w-[320px] mx-auto">
                    {props.children}
                </div>
            </div>
        }>
            <div class="flex p-3 bg-white shadow-xl rounded-xl">
                <div class="relative">
                    <img src="/public/assets/images/bg-sidebar-desktop.svg" alt="sidebar background abstract" />
                    <NavbarDesktop />
                </div>
                <div class="px-20 py-10">
                    {props.children}
                </div>
            </div>
        </Show>
        </>
    )
}

export default Layout;