import {Component, createSignal} from "solid-js";
import TextInput from "../../formUtils/TextInput";
import {useNavigate} from "@solidjs/router";
import {validate} from "../../formUtils/validation";
import {PersonalInformation, setAnswers} from "../../store/answers";

const YourInfo: Component = () => {
    const navigate = useNavigate();
    const [pageAnswers, setPageAnswers] = createSignal<PersonalInformation>({} as PersonalInformation);

    const next = (ev: Event) => {
        ev.preventDefault();
        if (validate(pageAnswers())) {
            setAnswers(
                'personalInformation',
                (info: PersonalInformation) => ({
                    ...info,
                    ...pageAnswers()
                }),
            );
            navigate("/select-plan")
        }
    }

    // TODO collect data
    // TODO required field: manage CSS
    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Personal info</h2>
        <p class="page-description">Please provide your name, email address, and phone number.</p>
        <form>
            <TextInput
                label={"Name"}
                type={"text"}
                placeholder={"Enter your name..."}
                onChange={(ev: Event) => setPageAnswers({
                    ...pageAnswers(),
                    name: (ev.target as HTMLInputElement).value
                })}
            />
            <TextInput
                label={"Email"}
                type={"email"}
                placeholder={"Enter your email address..."}
                onChange={(ev: Event) => setPageAnswers({
                    ...pageAnswers(),
                    email: (ev.target as HTMLInputElement).value
                })}
            />
            <TextInput
                label={"Phone"}
                type={"text"}
                placeholder={"e.g. +1 234 567 890"}
                onChange={(ev: Event) => setPageAnswers({
                    ...pageAnswers(),
                    phone: (ev.target as HTMLInputElement).value
                })}
            />

            <div class="flex fixed md:relative justify-end items-end bottom-0 inset-x-0 py-4 pr-4 md:pr-0 md:py-0 w-full bg-white md:bg-transparent md:h-full">
                <button type="submit" class="px-3 py-2 rounded bg-[#042859] hover:bg-[#174A8B] text-white" onClick={(ev: Event) => next(ev)}>Next step</button>
            </div>
        </form>

    </div>)
}

export default YourInfo;