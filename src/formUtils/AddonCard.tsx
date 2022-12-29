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
    return (<div class={"flex justify-between items-center border-[1px] rounded-lg p-3 cursor-pointer transition-all duration-200 "+selectedClass()} onClick={() => props.onClick(props.addon)}>
        <div class="flex items-center">
        <input class="form-check-input appearance-none h-4 w-4 border border-gray-200 rounded-sm bg-transparent checked:bg-[#4941E5] checked:border-[#4941E5] focus:outline-none transition duration-200" type="checkbox" checked={props.selected} />

        <div class="flex flex-col pl-3">
            <h4 class="capitalize font-semibold text-[#0E2E60]">{props.addon.label}</h4>
            <p class="text-xs text-gray-400">{props.addon.description}</p>
        </div>
        </div>
        <span class="text-xs text-[#5146EB] font-semibold">+${priceText()}</span>
    </div>)
}

export default AddonCard;