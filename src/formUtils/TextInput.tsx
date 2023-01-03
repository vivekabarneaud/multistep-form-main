import {JSX, onMount, Show} from "solid-js";
import {answers, setAnswers} from "../store/answers";

type TextInputProps = {
    label: string;
    type: string;
    formHandler: any;
}

const TextInput = (props: TextInputProps): JSX.Element => {
    onMount(() => {
        if (answers.personalInformation?.[props.label]) {
            props.formHandler.setFieldValue(props.label, answers.personalInformation?.[props.label]);
        }
    })

    return (<div class="flex flex-col gap-y-1">
        <div class="flex items-center justify-between w-full">
            <label for={props.label} class="input-label">{props.label}</label>
            <Show when={!!props.formHandler.fieldHasError(props.label)}>
                <small class="text-red-600 text-sm font-semibold">{props.formHandler.getFieldError(props.label)}</small>
            </Show>
        </div>
        <input
            name={props.label}
            type={props.type}
            value={props.formHandler.getFieldValue(props.label)}
            onInput={({ currentTarget: { name, value } }) =>
                props.formHandler.setFieldValue(name, value)
            }
            onBlur={({ currentTarget: { name } }) => {
                props.formHandler.validateField(name);
                props.formHandler.touchField(name);
                setAnswers(
                    'personalInformation',
                    () => ({
                        ...answers.personalInformation,
                        [name]: props.formHandler.getFieldValue(props.label)
                    })
                )
            }}
            class={"text-input "+(props.formHandler.fieldHasError(props.label) ? "input-errored" : "")}
            required
        />
    </div>)
}

export default TextInput;