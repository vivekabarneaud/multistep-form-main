import {Component, createSignal, For} from "solid-js";
import {Addon, answers, BillingPlan, setAnswers} from "../../store/answers";
import {validate} from "../../formUtils/validation";
import AddonCard from "../../formUtils/AddonCard";
import PrevNextButton from "../../layout/PrevNextButton";

const AddOns: Component = () => {
    const addons: Addon[] = [
        { label: "Online service", description: "Access to multiplayer games", monthlyPrice: 1, yearlyPrice: 10},
        { label: "Larger storage", description: "Extra 1TB of cloud save", monthlyPrice: 2, yearlyPrice: 20},
        { label: "Customizable profile", description: "Custom theme on your profile", monthlyPrice: 2, yearlyPrice: 20}
    ];
    const [currentAddons, setCurrentAddons] = createSignal<Addon[]>([...answers.addons] ?? [] as Addon[]);
    //  todo set store everytime, not only when pressing next
    const saveAnswers = (): boolean => {
        if (validate(currentAddons())) {
            setAnswers(
                'addons',
                () => ({
                    ...currentAddons(),
                }),
            );
            return true;
        }
        return false;
    }

    const selectAddon = (addon: Addon): void => {
        const addons: Addon[] = currentAddons();
        const index: number = addons.findIndex(el => el.label === addon.label);

        if (index >= 0) {
            addons.splice(index, 1);
        } else {
            addons.push(addon);
        }
        setCurrentAddons([...addons]);
    }

    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Pick add-ons</h2>
        <p class="page-description">Add-ons help enhance your gaming experience.</p>
        <form>
            <For each={addons}>
                {(addon: Addon) => <AddonCard addon={addon} billingPlan={answers?.selectedPlan?.billingPlan || BillingPlan.MONTHLY} selected={!!currentAddons()?.find(el => el.label === addon.label)} onClick={selectAddon} />}
            </For>

            <PrevNextButton saveAnswers={saveAnswers} />
        </form>
    </div>)
}

export default AddOns;