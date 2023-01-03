import {JSX} from "solid-js";

type TextInputProps = {
    label: string;
    type: string;
    formHandler: any;
}

const TextInput = (props: TextInputProps): JSX.Element => {

    return (<div class="flex flex-col gap-y-1">
        <label for={props.label} class="input-label">{props.label}</label>
        <input
            name={props.label}
            type={props.type}
            value={props.formHandler.getFieldValue('email')}
            onInput={({ currentTarget: { name, value } }) =>
                //Sets and validates the field value inside the form handler.
                props.formHandler.setFieldValue(name, value)
            }
            onBlur={({ currentTarget: { name } }) => {
                //Field is validated and touched.
                props.formHandler.validateField(name);
                props.formHandler.touchField(name);
            }}            class="text-input"
            required
        />
        {props.formHandler.fieldHasError(props.label) && (
            <small>{props.formHandler.getFieldError(props.label)}</small>
        )}
    </div>)
}

export default TextInput;