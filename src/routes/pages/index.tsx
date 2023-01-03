import {useNavigate} from "@solidjs/router";
import {Component} from "solid-js";

const Index: Component = () =>  {
    const navigate = useNavigate();

    navigate("/your-info");
    return (<></>)
}

export default Index;