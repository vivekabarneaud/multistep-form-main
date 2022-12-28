import {createStore} from "solid-js/store";

export type PersonalInformation = {
    name: string;
    email: string;
    phone: string;
}

export type Plan = {
    label: string;
    monthlyPrice: number;
    yearlyPrice: number;
}

export type Addon = {
    label: string;
    monthlyPrice: number;
    yearlyPrice: number;
    selected: boolean;
}

export type Answers = {
    personalInformation: PersonalInformation;
    selectedPlan: Plan;
    subscription: string;
    addons: Addon[];
}

export const [answers, setAnswers] = createStore<Answers>({} as Answers);