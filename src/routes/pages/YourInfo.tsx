import {Component} from "solid-js";
import TextInput from "../../formUtils/TextInput";

const YourInfo: Component = () => {
    // TODO collect data
    // TODO required field: manage CSS
    return (<div class="flex flex-col h-full">
        <h2 class="text-4xl font-semibold text-[#0E2E60] mb-3">Personal info</h2>
        <p class="max-w-xl text-gray-400 mb-8">Please provide your name, email address, and phone number.</p>
        <form class="flex flex-col gap-y-4 h-full pb-16 md:pb-0">
            <TextInput label={"Name"} type={"text"} placeholder={"Enter your name..."} />
            <TextInput label={"Email"} type={"email"} placeholder={"Enter your email address..."} />
            <TextInput label={"Phone"} type={"text"} placeholder={"e.g. +1 234 567 890"} />

            <div class="flex fixed md:relative justify-end items-end bottom-0 inset-x-0 py-4 pr-4 md:pr-0 md:py-0 w-full bg-white md:bg-transparent md:h-full">
                <button type="submit" class="px-3 py-2 rounded bg-[#042859] hover:bg-[#174A8B] text-white">Next step</button>
            </div>
        </form>

    </div>)
}

export default YourInfo;