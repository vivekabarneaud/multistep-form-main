import {Component, createSignal} from "solid-js";
import TextInput from "../../formUtils/TextInput";
import {answers, PersonalInformation, setAnswers} from "../../store/answers";
import PrevNextButton from "../../layout/PrevNextButton";
import {validate} from "../../formUtils/validation";

const YourInfo: Component = () => {
    const [pageAnswers, setPageAnswers] = createSignal<PersonalInformation>({} as PersonalInformation);

    const saveAnswers = (): boolean => {
        if (validate(pageAnswers())) {
            setAnswers(
                'personalInformation',
                (info: PersonalInformation) => ({
                    ...info,
                    ...pageAnswers()
                }),
            );
            return true;
        }
        return false;
    }

    // TODO required field: manage CSS
    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Personal info</h2>
        <p class="page-description">Please provide your name, email address, and phone number.</p>
        <form>
            <TextInput
                label={"Name"}
                type={"text"}
                placeholder={answers?.personalInformation?.name ?? "Enter your name..."}
                onChange={(ev: Event) => setPageAnswers({
                    ...pageAnswers(),
                    name: (ev.target as HTMLInputElement).value
                })}
            />
            <TextInput
                label={"Email"}
                type={"email"}
                placeholder={answers?.personalInformation?.email ?? "Enter your email address..."}
                onChange={(ev: Event) => setPageAnswers({
                    ...pageAnswers(),
                    email: (ev.target as HTMLInputElement).value
                })}
            />
            <TextInput
                label={"Phone"}
                type={"text"}
                placeholder={answers?.personalInformation?.phone ?? "e.g. +1 234 567 890"}
                onChange={(ev: Event) => setPageAnswers({
                    ...pageAnswers(),
                    phone: (ev.target as HTMLInputElement).value
                })}
            />

            <PrevNextButton saveAnswers={saveAnswers} />
        </form>

    </div>)
}

export default YourInfo;