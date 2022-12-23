import {JSX} from "solid-js";
import {A} from "@solidjs/router";

type NavbarButtonProps = {
    route: string;
    step: number;
}

const NavbarButton: (props: NavbarButtonProps) => JSX.Element = (props: NavbarButtonProps) => {
    const createLabelFromPath = (path: string): string => {
        const label = path.substring(1, path.length).split('-');
        return label.join(' ');
    }

    return (
        <div class="flex items-center">
            <A href={props.route} class="step-btn" activeClass="step-btn-active">{props.step}</A>
            <div class="hidden md:flex md:flex-col">
                <h4 class="text-xs uppercase text-white opacity-50">step {props.step}</h4>
                <h3 class="text-xs uppercase font-bold text-white">{createLabelFromPath(props.route)}</h3>
            </div>
        </div>
    )
}

export default NavbarButton;