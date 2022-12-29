import {Component} from "solid-js";

const ThankYou: Component = () => {
    return (<div class="flex flex-col h-full items-center justify-center gap-y-3 pb-20 md:pb-8">
        <img src="/public/assets/images/icon-thank-you.svg" class="w-16 h-16 mb-2"/>
        <h2 class="text-2xl font-bold text-[#0E2E60]">Thank you!</h2>
        <p class="text-sm max-w-xl px-8 text-gray-400 text-center leading-5">Thanks for confirming your subscription!
            We hope you have fun using our platform.
            If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
    </div>)
};

export default ThankYou;