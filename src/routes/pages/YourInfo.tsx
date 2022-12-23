import {Component} from "solid-js";

const YourInfo: Component = () => {
    // TODO collect data
    // TODO required field: manage CSS
    return (<div class="flex flex-col">
        <h2 class="text-4xl font-semibold text-[#0E2E60] mb-3">Personal info</h2>
        <p class="max-w-xl text-gray-400 mb-8">Please provide your name, email address, and phone number.</p>
        <form class="flex flex-col gap-y-1">
            <label for="name" class="text-sm font-medium text-[#0E2E60]">Name</label>
            <input type="text" placeholder="Enter your name here..." class="px-3 py-2 border border-gray-200 rounded-lg font-medium text-[#345172] placeholder:font-normal"/>
            <label for="email" class="text-sm font-medium text-[#0E2E60]">Email address</label>
            <input type="text" placeholder="Enter your email address..." class="px-3 py-2 border border-gray-200 rounded-lg font-medium text-[#345172] placeholder:font-normal"/>
            <label for="phone" class="text-sm font-medium text-[#0E2E60]">Phone number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" required class="px-3 py-2 border border-gray-200 rounded-lg font-medium text-[#345172] placeholder:font-normal required:border-red-500"/>

            <div class="flex justify-end pt-36">
                <button type="submit" class="px-3 py-2 rounded bg-[#042859] hover:bg-[#174A8B] text-white">Next step</button>
            </div>
        </form>

    </div>)
}

export default YourInfo;