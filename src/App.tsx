import type { Component } from 'solid-js';
import {useRoutes} from "@solidjs/router";
import routes from "./routes/routes";
import Layout from "./layout/Layout";

const App: Component = () => {
    const Routes = useRoutes(routes);

    return (
      <Layout>
          <Routes />
      </Layout>
    );
};

export default App;
