import {Component, For} from "solid-js";
import {Addon, answers, BillingPlan} from "../../store/answers";
import PrevNextButton from "../../layout/PrevNextButton";

const Summary: Component = () => {
    const confirm = (): boolean => {
        console.log("confirm!")
        //TODO
        return true;
    }

    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Finishing up</h2>
        <p class="page-description">Double check everything looks OK before confirming.</p>

        <div class="flex flex-col rounded-sm bg-[#F8F9FE]">
            <For each={answers.addons}>
                {(addon: Addon) => <div class="flex justify-between items-center">
                    <span class="text-gray-500">{addon.label}</span>
                    <span class="text-[#0E2E60]">${answers?.selectedPlan?.billingPlan === BillingPlan.YEARLY ? addon.yearlyPrice + "/yr" : addon.monthlyPrice + "/mo"}</span>
                </div>
                }
            </For>

        </div>

        <PrevNextButton saveAnswers={confirm} />
    </div>)
}

export default Summary;