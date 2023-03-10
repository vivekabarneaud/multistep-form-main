import {createSignal, For, ParentComponent, Show} from "solid-js";
import NavbarDesktop from "./NavbarDesktop";
import routes from "../routes/routes";
import NavbarButton from "./NavbarButton";

const Layout: ParentComponent = (props) => {
    const [screenW, setScreenW] = createSignal<number>(window.innerWidth);
    const routesToShow = routes.slice(1, routes.length - 1);

    window.addEventListener('resize', () => {
        setScreenW(window.innerWidth);
    });

    return (<>
        <Show when={screenW() > 576} fallback={
            <div class="flex flex-col w-full min-h-screen pt-12 gap-y-6">
                <div class="flex px-24 justify-between items-center w-full">
                    <For each={routesToShow}>
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
                    <img src="/assets/images/bg-sidebar-desktop.svg" alt="sidebar background abstract" />
                    <NavbarDesktop />
                </div>
                <div class="w-[600px] px-20 pt-10 pb-6">
                    {props.children}
                </div>
            </div>
        </Show>
        </>
    )
}

export default Layout;