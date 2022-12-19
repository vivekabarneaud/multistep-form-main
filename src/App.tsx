import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default App;
