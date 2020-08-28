import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "components/Layout/Layout";
import ProductList from "components/ProductList/ProductList";
import KawaiiHeader from "components/KawaiiHeader/KawaiiHeader";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    "https://palta-app-humkdenzz.vercel.app/api/avo"
  );
  const { data: productList }: any = await response.json();

  return {
    props: {
      productList: productList,
    },
  };
};
const Home = ({ productList }: { productList: any }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
