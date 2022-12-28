import {JSX, Show} from "solid-js";
import {BillingPlan, Plan} from "../store/answers";

type PlanCardProps = {
    plan: Plan;
    billingPlan: BillingPlan;
    selected: boolean;
    onClick: (plan: Plan) => void;
}

const PlanCard: (props: PlanCardProps) => JSX.Element = (props: PlanCardProps) => {
    const selectedClass = () => props.selected ? "card-selected" : "card-not-selected"
    const priceText = () => props.billingPlan === BillingPlan.MONTHLY ? props.plan.monthlyPrice + "/mo" : props.plan.yearlyPrice + "/yr";

    return (<div class={"flex md:flex-col items-center md:items-start border-[1px] rounded-lg p-3 md:w-[120px] cursor-pointer transition-all duration-200 "+selectedClass()} onClick={() => props.onClick(props.plan)}>
        <img
            src={"/public/assets/images/icon-"+props?.plan?.label+".svg"}
            alt={"plan icon "+props?.plan?.label}
            class={"w-9 md:mb-6"}
        />
        <div class="flex flex-col pl-3 md:pl-0">
            <h4 class="capitalize font-semibold text-[#0E2E60]">{props.plan.label}</h4>
            <p class="text-xs text-gray-400 font-semibold">${priceText}</p>
            <Show when={props.billingPlan === BillingPlan.YEARLY}>
                <p class="pt-1 text-xs font-medium text-[#0E2E60]">2 months free</p>
            </Show>
        </div>
    </div>)
}

export default PlanCard;