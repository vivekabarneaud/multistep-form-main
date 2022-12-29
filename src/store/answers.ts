import {createStore} from "solid-js/store";

export enum BillingPlan {
    MONTHLY = "monthly",
    YEARLY = "yearly"
}

export type PersonalInformation = {
    name: string;
    email: string;
    phone: string;
}

export type Plan = {
    label: string;
    monthlyPrice: number;
    yearlyPrice: number;
    billingPlan?: BillingPlan;
}

export type Addon = {
    label: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
}

export type Answers = {
    personalInformation: PersonalInformation;
    selectedPlan: Plan;
    addons: Addon[];
}

export const [answers, setAnswers] = createStore<Answers>({
    personalInformation: {} as PersonalInformation,
    selectedPlan: {} as Plan,
    addons: [] as Addon[]
} as Answers);