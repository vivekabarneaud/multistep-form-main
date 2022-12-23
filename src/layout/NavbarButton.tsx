import {JSX} from "solid-js";
import {A} from "@solidjs/router";

type NavbarButtonProps = {
    route: string;
    step: number;
}

const NavbarButton: (props: NavbarButtonProps) => JSX.Element = (props: NavbarButtonProps) => {
    return (
        <div class="flex">
            <A href={props.route} class="step-btn" activeClass="step-btn-active">{props.step}</A>
        </div>
    )
}

export default NavbarButton;