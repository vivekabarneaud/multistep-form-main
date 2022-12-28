import {Component} from "solid-js";
import {answers} from "../../store/answers";

const SelectPlan: Component = () => {
    console.log("STORE: ", answers);
    return (<>SELECT PLAN</>)
}

export default SelectPlan;