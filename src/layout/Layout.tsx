import { A } from "@solidjs/router";
import {createSignal, ParentComponent, Show} from "solid-js";

const Layout: ParentComponent = (props) => {
    const [screenW, setScreenW] = createSignal<number>(window.innerWidth);

    window.addEventListener('resize', () => {
        setScreenW(window.innerWidth);
    });

    return (<>
        <Show when={screenW() > 576} fallback={
            <div class="flex flex-col w-full min-h-screen pt-12 gap-y-6">
                <div class="flex px-24 justify-between items-center w-full">
                    <A href="/your-info" class="step-btn" activeClass="step-btn-active">1</A>
                    <A href="/select-plan" class="step-btn" activeClass="step-btn-active">2</A>
                    <A href="/addons" class="step-btn" activeClass="step-btn-active">3</A>
                    <A href="/summary" class="step-btn" activeClass="step-btn-active">4</A>
                </div>

                <div class="flex flex-col rounded-lg bg-white shadow-lg pt-20 px-10 w-[90%] min-w-[320px] mx-auto">
                    {props.children}
                </div>
            </div>
        }>big screen
        </Show>
        </>
    )
}

export default Layout;