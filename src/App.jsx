import React from "react";
import Layout from "./components/Layout";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <main>
      <Layout>
        <TodoContainer />
      </Layout>
    </main>
  );
};

export default App;
