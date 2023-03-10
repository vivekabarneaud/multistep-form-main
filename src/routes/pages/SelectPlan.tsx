import {Component, For, onMount} from "solid-js";
import PlanCard from "../../formUtils/PlanCard";
import {answers, BillingPlan, Plan, setAnswers} from "../../store/answers";
import PrevNextButton from "../../layout/PrevNextButton";

const SelectPlan: Component = () => {
    const plans: Plan[] = [
        { label: "arcade", monthlyPrice: 9, yearlyPrice: 90 },
        { label: "advanced", monthlyPrice: 12, yearlyPrice: 120 },
        { label: "pro", monthlyPrice: 15, yearlyPrice: 150 },
    ];

    onMount(() => {
        if (!answers.selectedPlan?.label) {
            selectPlan(plans[0]);
        }
    });

    const selectPlan = (plan: Plan): void => {
        setAnswers(
            'selectedPlan',
            () => ({
                ...plan,
                billingPlan: answers.selectedPlan?.billingPlan ?? BillingPlan.MONTHLY
            }),
        );
    }

    const toggleBillingPlan = (): void => {
        setAnswers(
            'selectedPlan',
            () => ({
                ...answers.selectedPlan,
                billingPlan: answers.selectedPlan?.billingPlan === BillingPlan.MONTHLY ?
                    BillingPlan.YEARLY : BillingPlan.MONTHLY
            }),
        );
    }

    return (<div class="flex flex-col h-full w-full">
        <h2 class="page-title">Select your plan</h2>
        <p class="page-description">You have the option of monthly or yearly billing.</p>
        <form>
            <div class="flex flex-col gap-y-3 md:flex-row md:gap-y-0 md:gap-x-3">
                <For each={plans}>
                    {(plan: Plan) => <PlanCard plan={plan} billingPlan={answers.selectedPlan?.billingPlan ?? BillingPlan.MONTHLY} selected={answers.selectedPlan?.label === plan?.label} onClick={selectPlan} />}
                </For>
            </div>

            <div class="mt-4 py-1 flex items-center justify-center gap-x-2 bg-[#F8F9FE] rounded-lg text-sm">
                <span class={answers.selectedPlan?.billingPlan === BillingPlan.MONTHLY ? "input-label" : "font-medium text-gray-400"}>Monthly</span>
                <label class="relative cursor-pointer w-20 h-10 rounded-full bg-[#03285A] scale-50">
                    <input type="checkbox" id="check" class="sr-only peer" checked={answers.selectedPlan?.billingPlan === BillingPlan.YEARLY} onChange={() => toggleBillingPlan()}/>
                    <span class="absolute w-2/5 h-4/5 bg-white rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500" />
                </label>
                <span class={answers.selectedPlan?.billingPlan === BillingPlan.YEARLY ? "input-label" : "font-medium text-gray-400"}>Yearly</span>
            </div>

            <PrevNextButton isFormValid={true} />
        </form>
    </div>)
}

export default SelectPlan;