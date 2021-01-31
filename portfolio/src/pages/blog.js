import React from "react";
import Layout from "../components/Layout";
import styles from "../components/blog.module.css";

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ad iusto
          laboriosam quibusdam ex, similique, magni enim iure, recusandae minus
          labore praesentium ratione tempora aspernatur?
        </p>
      </div>
    </Layout>
  );
};

export default blog;
