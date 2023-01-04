import {JSX} from "solid-js";
import {A} from "@solidjs/router";
import {answers} from "../store/answers";

type NavbarButtonProps = {
    route: string;
    step: number;
}

const NavbarButton: (props: NavbarButtonProps) => JSX.Element = (props: NavbarButtonProps) => {
    const createLabelFromPath = (path: string): string => {
        const label = path.substring(1, path.length).split('-');
        return label.join(' ');
    }
    const disabledClass = (): string => {
        if (props.step == 4 && (!answers.personalInformation?.name || !answers.selectedPlan?.label)) {
            return "btn-disabled"
        }
        return "";
    }

    return (
        <div class="flex items-center md:py-3">
            <A href={props.route} class={"step-btn "+disabledClass()} activeClass="step-btn-active">{props.step}</A>
            <div class="hidden md:flex md:flex-col md:pl-4">
                <h4 class="text-xs uppercase font-light text-white opacity-50">step {props.step}</h4>
                <h3 class="text-xs uppercase font-semibold text-white tracking-widest">{createLabelFromPath(props.route)}</h3>
            </div>
        </div>
    )
}

export default NavbarButton;