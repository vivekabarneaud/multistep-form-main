import {JSX, Show} from "solid-js";

type TextInputProps = {
    label: string;
    type: string;
    formHandler: any;
}

const TextInput = (props: TextInputProps): JSX.Element => {

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
                //Sets and validates the field value inside the form handler.
                props.formHandler.setFieldValue(name, value)
            }
            onBlur={({ currentTarget: { name } }) => {
                //Field is validated and touched.
                props.formHandler.validateField(name);
                props.formHandler.touchField(name);
            }}
            class={"text-input "+(props.formHandler.fieldHasError(props.label) ? "input-errored" : "")}
            required
        />
    </div>)
}

export default TextInput;