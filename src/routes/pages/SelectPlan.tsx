import {Component, createSignal, For} from "solid-js";
import PlanCard from "../../formUtils/PlanCard";
import {answers, BillingPlan, Plan, setAnswers} from "../../store/answers";
import {validate} from "../../formUtils/validation";
import {useNavigate} from "@solidjs/router";
import PrevNextButton from "../../layout/PrevNextButton";

const SelectPlan: Component = () => {
    const plans: Plan[] = [
        { label: "arcade", monthlyPrice: 9, yearlyPrice: 90 },
        { label: "advanced", monthlyPrice: 12, yearlyPrice: 120 },
        { label: "pro", monthlyPrice: 15, yearlyPrice: 150 },
    ];
    const [currentPlan, setCurrentPlan] = createSignal<Plan>(plans[0]);
    const [billingPlan, setBillingPlan] = createSignal<BillingPlan>(BillingPlan.MONTHLY);

    const selectPlan = (plan: Plan): void => {
        setCurrentPlan(plan);
    }
    const toggleBillingPlan = (): void => {
        billingPlan() === BillingPlan.MONTHLY ?
            setBillingPlan(BillingPlan.YEARLY) :
            setBillingPlan(BillingPlan.MONTHLY);
    }
    const saveAnswers = (): boolean => {
        if (validate(currentPlan())) {
            setAnswers(
                'selectedPlan',
                (plan: Plan) => ({
                    billingPlan: billingPlan(),
                    ...currentPlan(),
                }),
            );
            return true;
        }
        return false;
    }

    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Select your plan</h2>
        <p class="page-description">You have the option of monthly or yearly billing.</p>
        <form>
            <div class="flex flex-col gap-y-3 md:flex-row md:gap-y-0 md:gap-x-3">
                <For each={plans}>
                    {(plan: Plan) => <PlanCard plan={plan} billingPlan={billingPlan()} selected={currentPlan()?.label === plan?.label} onClick={selectPlan} />}
                </For>
            </div>

            <div class="mt-4 py-1 flex items-center justify-center gap-x-2 bg-[#F8F9FE] rounded-lg text-sm">
                <span class={billingPlan() === BillingPlan.MONTHLY ? "input-label" : "font-medium text-gray-400"}>Monthly</span>
                <label class="relative cursor-pointer w-20 h-10 rounded-full bg-[#03285A] scale-50">
                    <input type="checkbox" id="check" class="sr-only peer" onChange={() => toggleBillingPlan()}/>
                    <span class="absolute w-2/5 h-4/5 bg-white rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500" />
                </label>
                <span class={billingPlan() === BillingPlan.YEARLY ? "input-label" : "font-medium text-gray-400"}>Yearly</span>
            </div>

            <PrevNextButton saveAnswers={saveAnswers} />
        </form>
    </div>)
}

export default SelectPlan;