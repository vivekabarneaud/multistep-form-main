import {Addon, BillingPlan} from "../store/answers";
import {JSX, Show} from "solid-js";

type AddonCardProps = {
    addon: Addon;
    billingPlan: BillingPlan;
    selected: boolean;
    onClick: (addon: Addon) => void;
}

const AddonCard: (props: AddonCardProps) => JSX.Element = (props: AddonCardProps) => {
    const selectedClass = () => props.selected ? "card-selected" : "card-not-selected";
    const priceText = () => props.billingPlan === BillingPlan.MONTHLY ? props.addon.monthlyPrice + "/mo" : props.addon.yearlyPrice + "/yr";

    return (<div class={"flex items-center border-[1px] rounded-lg p-3 cursor-pointer transition-all duration-200 "+selectedClass()} onClick={() => props.onClick(props.addon)}>
        <input type="checkbox" checked={props.selected} class="checked:bg-[#4941E5] text-white"/>
        <div class="flex flex-col pl-3">
            <h4 class="capitalize font-semibold text-[#0E2E60]">{props.addon.label}</h4>
            <p class="text-xs text-gray-400">{props.addon.description}</p>
            <Show when={props.billingPlan === BillingPlan.YEARLY}>
                <p class="pt-1 text-xs font-medium text-[#0E2E60]">2 months free</p>
            </Show>
        </div>
    </div>)
}

export default AddonCard;