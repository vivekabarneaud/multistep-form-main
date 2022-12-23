import type { Component } from 'solid-js';
import {useRoutes} from "@solidjs/router";
import routes from "./routes/routes";
import Layout from "./layout/Layout";

const App: Component = () => {
    const Routes = useRoutes(routes);

    return (
        <div class="main flex items-center justify-center min-h-screen w-screen bg-[#EEF5FF]">
            <Layout>
                <Routes />
            </Layout>
        </div>
    );
};

export default App;
