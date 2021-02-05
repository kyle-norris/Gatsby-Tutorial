import React from "react";
import Header from "../examples/Header";
import Layout from "../components/Layout";
import HeaderStatic from "../examples/HeaderStatic";

const examples = () => {
  return (
    <Layout>
      <h1>Hello from examples page</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  );
};

export default examples;
