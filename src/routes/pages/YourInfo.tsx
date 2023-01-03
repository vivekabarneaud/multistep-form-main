import {Component} from "solid-js";
import {useFormHandler, yupSchema} from "solid-form-handler";
import {personalInformationSchema} from "../../formUtils/validation";
import TextInput from "../../formUtils/TextInput";
import PrevNextButton from "../../layout/PrevNextButton";

const YourInfo: Component = () => {
    const formHandler = useFormHandler(yupSchema(personalInformationSchema));

    const submit = async (event: Event) => {
        event.preventDefault();
        try {
            await formHandler.validateForm();
        } catch (error) {
            console.error(error);
        }
    };

    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Personal info</h2>
        <p class="page-description">Please provide your name, email address, and phone number.</p>
        <form onSubmit={submit}>
            <TextInput label="name" type="text" formHandler={formHandler} />
            <TextInput label="email" type="email" formHandler={formHandler} />
            <TextInput label="phone" type="text" formHandler={formHandler} />

            <PrevNextButton isFormValid={!formHandler.isFormInvalid()} />
        </form>

    </div>)
}

export default YourInfo;