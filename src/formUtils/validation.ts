import * as yup from "yup";
import {PersonalInformation} from "../store/answers";

const phoneRegex: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const personalInformationSchema: yup.SchemaOf<PersonalInformation> = yup.object({
    name: yup.string().required('Name is required.'),
    email: yup.string().email('Invalid email.').required('Email is required.'),
    phone: yup.string().matches(phoneRegex, "Invalid phone.").required('Phone is required.')
});