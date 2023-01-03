import {Component, createSignal} from "solid-js";
import {answers, PersonalInformation, setAnswers} from "../../store/answers";
import {useFormHandler, yupSchema} from "solid-form-handler";
import {personalInformationSchema} from "../../formUtils/validation";
import TextInput from "../../formUtils/TextInput";

const YourInfo: Component = () => {
    const [pageAnswers, setPageAnswers] = createSignal<PersonalInformation>({} as PersonalInformation);
    const formHandler = useFormHandler(yupSchema(personalInformationSchema));
    const { formData } = formHandler;

    const submit = async (event: Event) => {
        event.preventDefault();
        try {
            await formHandler.validateForm();
            console.log('Data sent with success: ' + JSON.stringify(formData()));
            //formHandler.resetForm();
        } catch (error) {
            console.error(error);
        }
    };
    // TODO required field: manage CSS
    return (<div class="flex flex-col h-full">
        <h2 class="page-title">Personal info</h2>
        <p class="page-description">Please provide your name, email address, and phone number.</p>
        <form onSubmit={submit}>
            <TextInput label="name" type="text" formHandler={formHandler} />
            <TextInput label="email" type="email" formHandler={formHandler} />
            <TextInput label="phone" type="text" formHandler={formHandler} />

            <button disabled={formHandler.isFormInvalid()}>Submit</button>
        </form>

    </div>)
}

export default YourInfo;