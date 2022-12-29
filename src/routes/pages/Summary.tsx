import {Component, createMemo, For} from "solid-js";
import {Addon, answers, BillingPlan} from "../../store/answers";
import PrevNextButton from "../../layout/PrevNextButton";
import {A} from "@solidjs/router";

const Summary: Component = () => {
    const total = createMemo<number>(() => {
        let yearlyAddonsPrice: number = 0,
            monthlyAddonsPrice: number = 0;

        answers?.addons?.forEach(addon => {
            yearlyAddonsPrice += addon.yearlyPrice;
            monthlyAddonsPrice += addon.monthlyPrice;
        })
        if (answers?.selectedPlan?.billingPlan === BillingPlan.MONTHLY) {
            return answers?.selectedPlan?.monthlyPrice + monthlyAddonsPrice;
        }
        return answers?.selectedPlan?.yearlyPrice + yearlyAddonsPrice;
    })

    const confirm = (): boolean => {
        console.log("confirm!")
        //TODO
        return true;
    }

    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Finishing up</h2>
        <p class="page-description">Double check everything looks OK before confirming.</p>

        <div class="flex flex-col rounded-lg bg-[#F8F9FE] px-5 py-2">
            <div class="flex items-center justify-between pb-4 pt-2 border-b-[1px] border-gray-300">
                <div class="flex flex-col">
                    <h4 class="capitalize font-semibold text-[#0E2E60]">{answers?.selectedPlan?.label} ({answers?.selectedPlan?.billingPlan})</h4>
                    <A href="/select-plan"><span class="text-gray-400 text-sm underline">Change</span></A>
                </div>
                <span class="text-sm font-bold text-[#0E2E60]">${answers?.selectedPlan?.billingPlan === BillingPlan.YEARLY ? answers?.selectedPlan?.yearlyPrice + "/yr" : answers?.selectedPlan?.monthlyPrice + "/mo"}</span>
            </div>
            <div class="flex flex-col py-4 gap-y-2">
                <For each={answers.addons}>
                    {(addon: Addon) => <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-400">{addon.label}</span>
                        <span class="text-xs font-semibold text-[#0E2E60]">+${answers?.selectedPlan?.billingPlan === BillingPlan.YEARLY ? addon.yearlyPrice + "/yr" : addon.monthlyPrice + "/mo"}</span>
                    </div>
                    }
                </For>
            </div>
        </div>

        <div class="flex items-center justify-between px-5 pt-6">
            <span class="text-sm text-gray-400">Total (per {answers?.selectedPlan?.billingPlan === BillingPlan.YEARLY ? "year" : "month"})</span>
            <span class="text-[#4137D2] font-bold">+${total}</span>
        </div>

        <PrevNextButton saveAnswers={confirm} />
    </div>)
}

export default Summary;