import {Component, For} from "solid-js";
import {Addon, answers, BillingPlan, setAnswers} from "../../store/answers";
import AddonCard from "../../formUtils/AddonCard";
import PrevNextButton from "../../layout/PrevNextButton";

const AddOns: Component = () => {
    const addons: Addon[] = [
        { label: "Online service", description: "Access to multiplayer games", monthlyPrice: 1, yearlyPrice: 10},
        { label: "Larger storage", description: "Extra 1TB of cloud save", monthlyPrice: 2, yearlyPrice: 20},
        { label: "Customizable profile", description: "Custom theme on your profile", monthlyPrice: 2, yearlyPrice: 20}
    ];

    const selectAddon = (addon: Addon): void => {
        const addons: Addon[] = [...answers?.addons] ?? [] as Addon[];
        const index: number = addons.findIndex(el => el.label === addon.label);

        if (index >= 0) {
            addons.splice(index, 1);
        } else {
            addons.push(addon);
        }
        setAnswers(
            'addons',
            () => ({
                ...addons,
            }),
        );
    }

    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Pick add-ons</h2>
        <p class="page-description">Add-ons help enhance your gaming experience.</p>
        <form>
            <For each={addons}>
                {(addon: Addon) => <AddonCard addon={addon} billingPlan={answers?.selectedPlan?.billingPlan || BillingPlan.MONTHLY} selected={!!answers.addons?.find(el => el.label === addon.label)} onClick={selectAddon} />}
            </For>

            <PrevNextButton isFormValid={true} />
        </form>
    </div>)
}

export default AddOns;